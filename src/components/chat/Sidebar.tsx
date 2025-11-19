import type { User } from "../../types";

type Props = {
  user: User;
  connected: boolean;
  onLogout: () => void;
  theme: string;
  setTheme: (theme: string) => void;
};

export default function Sidebar({
  user,
  connected,
  onLogout,
  theme,
  setTheme,
}: Props) {
  return (
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

      <div className="tg-chat-list">
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
      </div>

      <footer className="tg-side-footer">
        <button onClick={onLogout}>Logout</button>
      </footer>
    </aside>
  );
}
