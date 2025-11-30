import type { ChatMessage } from "../../types";

type Props = {
  msg: ChatMessage;
  isSelf: boolean;
  isAnon: boolean
};

export default function MessageBubble({ msg, isSelf, isAnon }: Props) {
  return (
    <div className={`tg-msg ${isSelf ? "self" : "other"}`}>
      {!isSelf && <div className="tg-name">{msg.sender}</div>}
      <div className={`tg-bubble ${isAnon ? "anon" : ""}`}>
  {msg.message}
</div>
    </div>
  );
}
