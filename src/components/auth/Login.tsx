import { useState } from "react";
import { encryptPassword } from "../../utils/crypto";
import type { User } from "../../types";

export default function Login({ setUser }: { setUser: (u: User) => void }) {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!nickname.trim() || !password.trim()) return;

    const encryptedPassword = encryptPassword(password);
    const newUser: User = { username: nickname, password: encryptedPassword };

    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-[#eaeef3] ">
      <div className="bg-[var(--tg-sidebar-bg)] px-30 py-40 rounded-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] w-[340px] text-center">
        <h2 className="mb-[20px]">Welcome to Batman Chat</h2>
        <form onSubmit={handleLogin}>
          <input
            className="w-full mb-[12px] p-[10px] rounded-[8px] border-1 border-solid border-[var(--tg-input-border)] 
            bg-[var(--tg-input-bg)] text-[var(--tg-text)] outline-none"
            type="text"
            placeholder="Enter nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <input
            className="w-full mb-[12px] p-[10px] rounded-[8px] border-1 border-solid border-[var(--tg-input-border)] 
            bg-[var(--tg-input-bg)] text-[var(--tg-text)] outline-none"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
          className="w-full p-2.5 bg-[var(--tg-bubble-self)] text-[var(--tg-bubble-self-text)] 
          border-none rounded-[8px] cursor-pointer transition-opacity duration-200 hover:opacity-[0.85]"
          type="submit"
          >
          Enter</button>
        </form>
      </div>
    </div>
  );
}
