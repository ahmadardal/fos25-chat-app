import MessageBubble from "./MessageBubble";
import type { ChatMessage, User } from "../../types";

type Props = {
  messages: ChatMessage[];
  user: User;
  chatRef: React.RefObject<HTMLDivElement>;
};

export default function MessageList({ messages, user, chatRef }: Props) {
  return (
    <div
      className="flex-1 overflow-y-auto p-[20px] flex flex-col gap-[10px] scroll-smooth bg-[url(./assets/pattern-1.svg)]"
      ref={chatRef}
    >
      {messages.map((msg, i) => {
        const isSelf = msg.sender === user.username;
        return <MessageBubble key={i} msg={msg} isSelf={isSelf} />;
      })}
    </div>
  );
}
