import MessageBubble from "./MessageBubble";
import type { ChatMessage, User } from "../../types";

type Props = {
  messages: ChatMessage[];
  user: User;
  chatRef: React.RefObject<HTMLDivElement>;
};

export default function MessageList({ messages, user, chatRef }: Props) {
  return (
    <div className="tg-messages" ref={chatRef}>
      {messages.map((msg, i) => {
        const isSelf = msg.sender === user.username;
        return (
          <MessageBubble
            key={i}
            msg={msg}
            isSelf={isSelf}
          />
        );
      })}
    </div>
  );
}
