import { useEffect, useState } from "react";
import "./App.css";

import type { User } from "./types";
import { decryptPassword } from "./utils/crypto";

import Login from "./components/auth/Login";
import Chat from "./components/chat/Chat";


export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

useEffect(() => {
  document.body.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}, [theme]);


  // Hämta användare från localStorage
  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);
      const decrypted = decryptPassword(parsed.password);

      setUser({
        username: parsed.username,
        password: decrypted,
      });
    } catch {
      console.error("Kunde inte dekryptera användardata");
      localStorage.removeItem("user");
    }
  }, []);

  // Om ingen användare → visa login
  if (!user) {
    return <Login setUser={setUser} />;
  }

  // Annars visa chatten
  return (
  <Chat
    user={user}
    onLogout={() => {
      localStorage.removeItem("user");
      setUser(null);
    }}
    theme={theme}
    setTheme={setTheme}
  />
);

  
}
