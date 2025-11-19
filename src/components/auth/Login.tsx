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
