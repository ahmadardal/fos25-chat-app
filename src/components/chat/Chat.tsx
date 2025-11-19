import { useEffect, useState, useRef } from "react";
import { io, Socket } from "socket.io-client";
import type { ChatMessage, User } from "../../types";
import MessageList from "./MessageList";
import Composer from "./Composer";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { SOCKET_URL, SOCKET_PATH } from "../../utils/constants";
import "../../App.css";
import { createBlipPlayer } from "/src/utils/audio";

type ChatProps = {
  user: User;
  onLogout: () => void;
  theme: string;
  setTheme: (t: string) => void;
};

let socket: Socket | null = null;

export default function Chat({ user, onLogout, theme, setTheme }: ChatProps) {
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);

  const blipRef = useRef<(() => void) | null>(null);

useEffect(() => {
  blipRef.current = createBlipPlayer();
  return () => {
    blipRef.current = null;
  };
}, []);


  // Initiera socket
  useEffect(() => {
    socket = io(SOCKET_URL, { path: SOCKET_PATH });

    socket.on("connect", () => setConnected(true));
    socket.on("disconnect", () => setConnected(false));

    // MOTTAG MEDDELANDEN
 socket.on("chat_room", (msg: ChatMessage | string) => {
  console.log("RECEIVED FROM SERVER:", msg);

  let parsed: ChatMessage;

  if (typeof msg === "string") {
    parsed = { sender: "Unknown", message: msg };
  } else {
    parsed = msg;
  }

  if (parsed.sender !== user.username) {
    blipRef.current?.();
  }

  setMessages(prev => [...prev, parsed]);
});

    return () => {
      socket?.disconnect();
    };
  }, [user]);

  // Auto-scroll
  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  // SKICKA MEDDELANDE (identisk med gamla appen)
  const sendMessage = (text: string) => {
    console.log("SEND FROM CLIENT:", text, user.username);

    if (!socket || !text.trim()) return;

    const msg: ChatMessage = {
      sender: user.username,
      message: text,
    };

    // skicka till server
    socket.emit("chat_room", msg);

    // lokal echo (identiskt med din gamla kod)
    setMessages(prev => [...prev, msg]);
  };

  return (
    <main className="tg-app">
      <Sidebar
        user={user}
        connected={connected}
        onLogout={onLogout}
        theme={theme}
        setTheme={setTheme}
      />

      <section className="tg-chat-area">
        <Header user={user} connected={connected} />

        {/* MESSAGES */}
        <MessageList messages={messages} user={user} chatRef={chatRef} />

        {/* COMPOSER */}
        <Composer onSend={sendMessage} />
      </section>
    </main>
  );
}
