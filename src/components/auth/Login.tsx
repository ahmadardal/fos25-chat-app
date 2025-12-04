import { useState } from "react";
import { encryptPassword } from "../../utils/crypto";
import type { User } from "../../types";
import { useTheme } from '../../../ThemeContext';

export default function Login({ setUser }: { setUser: (u: User) => void }) {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const { colorAccents } = useTheme();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!nickname.trim() || !password.trim()) return;

    const encryptedPassword = encryptPassword(password);
    const newUser: User = { username: nickname, password: encryptedPassword };

    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#eaeef3]">
      <div className="bg-[var(--tg-sidebar-bg)] px-8 py-10 rounded-2xl shadow-lg w-[340px] text-center">
        <h2 className="mb-5">Welcome to Batman Chat</h2>
        <form onSubmit={handleLogin}>
          <input
            className="w-full mb-3 p-2.5 rounded-lg border border-solid bg-[var(--tg-input-bg)] text-[var(--tg-text)] border-[var(--tg-input-border)] outline-none text-[15px] transition-all duration-200 focus:border-[var(--tg-bubble-self)]"
            type="text"
            placeholder="Enter nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <input
            className="w-full mb-3 p-2.5 rounded-lg border border-solid tg-input"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
          className="w-full px-[10px] py-[12px] bg-[var(--tg-bubble-self)] text-[var(--tg-bubble-self-text)] border-0 rounded-lg font-semibold cursor-pointer transition-opacity duration-200 hover:opacity-80"
          type="submit"
          >
          Enter</button>
        </form>
      </div>
    </div>
  );
}
