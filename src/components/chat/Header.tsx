import type { User } from "../../types";
import { useTheme } from '../../../ThemeContext';

type Props = {
  user: User;
  connected: boolean;
};

export default function Header({ user, connected }: Props) {
  const { colorAccents: colors } = useTheme();
  return (
    <header className={`p-4 border-b border-solid ${colors.sidebarBorder} flex items-center`}>
      <div className="flex items-center gap-[10px]">
        <img
          className="w-[42px] h-[42px] rounded-full"
          src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${user.username}`}
          alt=""
        />
        <div>
          <div className="font-semibold text-[16px]">{user.username}</div>
          <div className="text-[13px] opacity-[0.6]">
            {connected ? "online" : "disconnected"}
          </div>
        </div>
      </div>
    </header>
  );
}
