import MessageBubble from "./MessageBubble";
import type { ChatMessage, User } from "../../types";
import { useTheme } from '../../../ThemeContext';

type Props = {
  messages: ChatMessage[];
  user: User;
  chatRef: React.RefObject<HTMLDivElement>;
};

export default function MessageList({ messages, user, chatRef }: Props) {
  const { colorAccents: colors } = useTheme();
  return (
    <div
      className={`flex-1 overflow-y-auto p-5 flex flex-col gap-[10px] scroll-smooth bg-[url(./assets/pattern-1.svg)] ${colors.chatBg}`}
      ref={chatRef}
    >
      {messages.map((msg, i) => {
        const isSelf = msg.sender === user.username;
        return <MessageBubble key={i} msg={msg} isSelf={isSelf} />;
      })}
    </div>
  );
}
