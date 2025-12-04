import type { User } from "../../types";

type Props = {
  user: User;
  connected: boolean;
};

export default function Header({ user, connected }: Props) {
  return (
    <header className="p-[16px] border-b-1 border-solid flex items-center border-[var(--tg-sidebar-border)] ">
      <div className="flex items-center gap-[10px]">
        <img
          className="w-[42px] h-[42px] rounded-[50%]"
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
