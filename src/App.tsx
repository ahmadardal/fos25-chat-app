import { useEffect, useState, useRef } from "react";
import type { KeyboardEvent, FormEvent } from "react";
import "./App.css";
import { io, Socket } from "socket.io-client";
import type { ChatMessage, User } from "./types";
import { SOCKET_URL, SOCKET_PATH } from "./utils/constants";
import { encryptPassword, decryptPassword } from "./utils/crypto";
import { createBlipPlayer } from "./utils/audio";

let socket: Socket | null = null; // håller Socket.io-anslutningen (null innan man kopplar upp)

// Huvudkomponenten för chatten – hanterar användare, meddelanden, tema och anslutning
export default function App() {
  const [connected, setConnected] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const [nickname, setNickname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );
  const chatRef = useRef<HTMLDivElement>(null);
  const blipRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    blipRef.current = createBlipPlayer();
    return () => {
      blipRef.current = null;
    };
  }, []);

  // Hämtar och dekrypterar sparad användare från localStorage vid start
  useEffect(() => {
    const storedUser = localStorage.getItem("user"); // hämta sparad användare
    if (storedUser) {
      const parsed = JSON.parse(storedUser); // gör om till objekt
      try {
        const decryptedPassword = decryptPassword(parsed.password);

        setUser({
          username: parsed.username,
          password: decryptedPassword,
        }); // sätt användaren som inloggad
      } catch (err) {
        console.error("Fel vid dekryptering:", err);
        localStorage.removeItem("user"); // ta bort om fel uppstår
      }
    }
  }, []); // körs bara vid första laddningen

  // Adda theme, hitta sparad theme.
  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!user) return;

    /*socket = io("wss://socket.chasqui.se");*/
    socket = io(SOCKET_URL, { path: SOCKET_PATH });

    socket.on("connect", () => setConnected(true));
    socket.on("disconnect", () => setConnected(false));

    socket.on("chat_room", (data: ChatMessage | string) => {
      let parsed: ChatMessage;
      if (typeof data === "string") {
        try {
          parsed = JSON.parse(data);
        } catch {
          parsed = { sender: "Unknown", message: data };
        }
      } else {
        parsed = data;
      }

      setMessages((prev: ChatMessage[]) => [...prev, parsed]);

      // Play blip for messages not sent by the current user
      if (parsed.sender && parsed.sender !== user?.username) {
        blipRef.current?.();
      }
    });

    return () => {
      socket?.disconnect();
    };
  }, [user]);

  // Auto-scroll
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  // Send message function, Skicka, Adda medelande till din lcoal client, clear chat after.
  const sendMessage = () => {
    if (!socket || !currentMessage.trim()) return;

    const message: ChatMessage = {
      sender: user?.username || "Anonymous",
      message: currentMessage,
    };

    socket.emit("chat_room", message);
    setMessages((prev) => [...prev, message]);
    setCurrentMessage("");
  };

  // Tryck Enter Triggerar function
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  // Login

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (!nickname.trim() || !password.trim()) return;

    const encryptedPassword = encryptPassword(password);

    const newUser: User = { username: nickname, password: encryptedPassword };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setMessages([]);
    socket?.disconnect();
  };

  // Login Screen
  if (!user) {
    return (
      <div className="tg-login">
        <div className="tg-login-card">
          <h2>Welcome to Batman Chat</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Enter nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Enter</button>
          </form>
        </div>
      </div>
    );
  }

  // Chatui
  return (
    <main className="tg-app">
      <aside className="tg-sidebar">
        <header className="tg-side-header">
          <span>Chats</span>
          <button
            className="tg-theme-btn"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </header>

        <div className="tg-search">
          <input placeholder="Search" />
        </div>

        <nav className="tg-chat-list">
          <button className="tg-chat-item tg-active">
            <img
              src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${user.username}`}
              alt=""
            />
            <div className="tg-chat-info">
              <strong>General Chat</strong>
              <small>{connected ? "Online" : "Offline"}</small>
            </div>
          </button>
        </nav>

        <footer className="tg-side-footer">
          <button onClick={handleLogout}>Logout</button>
        </footer>
      </aside>

      <section className="tg-chat-area">
        <header className="tg-chat-header">
          <div className="tg-peer">
            <img
              src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${user.username}`}
              alt="avatar"
            />
            <div>
              <div className="tg-peer-name">{user.username}</div>
              <div className="tg-peer-status">
                {connected ? "online" : "disconnected"}
              </div>
            </div>
          </div>
        </header>

        <div className="tg-messages" ref={chatRef}>
          {messages.map((msg, i) => {
            const isSelf = msg.sender === user.username;
            return (
              <div key={i} className={`tg-msg ${isSelf ? "self" : "other"}`}>
                {!isSelf && <div className="tg-name">{msg.sender}</div>}
                <div className="tg-bubble">{msg.message}</div>
              </div>
            );
          })}
        </div>

        <div className="tg-composer">
          <input
            className="tg-input"
            type="text"
            placeholder="Write a message…"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </section>
    </main>
  );
}
