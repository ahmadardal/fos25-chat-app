import type { User } from "../../types";

type Props = {
  user: User;
  connected: boolean;
};

export default function Header({ user, connected }: Props) {
  return (
    <header className="tg-chat-header">
      <div className="tg-peer">
        <img
          src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${user.username}`}
          alt=""
        />
        <div>
          <div className="tg-peer-name">{user.username}</div>
          <div className="tg-peer-status">
            {connected ? "online" : "disconnected"}
          </div>
        </div>
      </div>
    </header>
  );
}
