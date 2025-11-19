import type { ChatMessage } from "../../types";

type Props = {
  msg: ChatMessage;
  isSelf: boolean;
};

export default function MessageBubble({ msg, isSelf }: Props) {
  return (
    <div className={`tg-msg ${isSelf ? "self" : "other"}`}>
      {!isSelf && <div className="tg-name">{msg.sender}</div>}
      <div className="tg-bubble">{msg.message}</div>
    </div>
  );
}
