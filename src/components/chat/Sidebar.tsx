import DropDownColor from "../../DropDownColor";
import { useTheme } from '../../../ThemeContext';
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
  const { colorAccents: colors } = useTheme();
  return (
    <aside className={`hidden md:flex w-[300px] flex-col ${colors.sidebarBg} ${colors.sidebarBorder} transition-all duration-300 ease-linear`}>

      <header
        className="flex justify-between items-center p-4 border-b border-solid font-semibold"
      >
        <span>Chats</span>
          <DropDownColor/>
      </header>

      <div className="flex-1 overflow-y-auto">
        <button
          className="flex items-center gap-[10px] px-3 py-4 w-full bg-[rgba(0,0,0,0.05)] border-0 text-left cursor-pointer transition-colors duration-200 hover:bg-black/10"
        >
          <img 
          className="w-11 h-11 rounded-full"
            src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${user.username}`}
            alt=""
          />
          <div className={colors.text}>
            <strong className="text-[15px] block font-semibold">General Chat</strong>
            <small className="text-[13px] opacity-60">
              {connected ? "Online" : "Offline"}
            </small>
          </div>
        </button>
      </div>

      <footer className="p-4 border-t border-solid">
        <button
          className={`w-full px-[10px] py-[12px] ${colors.bubbleSelf} ${colors.bubbleSelfText} border-0 rounded-lg font-semibold cursor-pointer transition-opacity duration-200 hover:opacity-80`}
          onClick={onLogout}
        >
          Logout
        </button>
      </footer>
    </aside>
  );
}
