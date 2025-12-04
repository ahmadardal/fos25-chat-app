import type { User } from "../../types";

type Props = {
  user: User;
  connected: boolean;
  onLogout: () => void;
  theme: string;
  setTheme: (theme: string) => void;
  color: string;
  setColor: (color: string) => void;
};

export default function Sidebar({
  user,
  connected,
  onLogout,
  theme,
  setTheme,
  color,
  setColor,
}: Props) {
  return (
    <aside className="md:hidden">
      <header
        className="flex justify-between items-center p-[16px] border-b-1 border-solid 
      border-[var(--tg-sidebar-border)] font-semibold"
      >
        <span>Chats</span>
        <button
          className="bg-none border-none cursor-pointer text-[20px]"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </header>

      <div className="flex-1 overflow-y-auto">
        <button
          className="flex items-center gap-[10px] px-[12px] py-[16px] w-full bg-transparent border-none text-left 
        cursor-pointer transition-colors duration-200 ease-linear bg-[rgba(0,0,0,0.05)]"
        >
          <img
            src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${user.username}`}
            alt=""
          />
          <div className="tg-chat-info">
            <strong className="text-[15px] block">General Chat</strong>
            <small className="text-[13px] opacity-[0.6]">
              {connected ? "Online" : "Offline"}
            </small>
          </div>
        </button>
      </div>

      <footer className="p-[16px] border-t-1 border-solid border-[var(--tg-sidebar-border)]">
        <button
          className="w-full bg-[var(--tg-bubble-self)] text-[var(--tg-bubble-self-text-)] 
          border-none rounded-[8px] p-[10px] cursor-pointer font-semibold transition-opacity duration-200 
          ease-linear hover:opacity-[0.8]"
          onClick={onLogout}
        >
          Logout
        </button>
      </footer>
    </aside>
  );
}
