import MessageBubble from "./MessageBubble";
import type { ChatMessage, User } from "../../types";

type Props = {
  messages: ChatMessage[];
  user: User;
  chatRef: React.RefObject<HTMLDivElement>;
  editingId: string | null;
  editText: string;
  setEditingId: (id: string | null) => void;
  setEditText: (text: string) => void;
  saveEdit: (id: string) => void;
};

export default function MessageList({ messages, user, chatRef, editingId, editText, setEditingId, setEditText, saveEdit }: Props) {
  return (
    <div className="tg-messages" ref={chatRef}>
      {messages.map((msg, i) => {
        const isSelf = msg.sender === user.username;
        return (
          <MessageBubble
            key={i}
            msg={msg}
            isSelf={isSelf}
            editingId={editingId}
            editText={editText}
            setEditingId={setEditingId}
            setEditText={setEditText}
            saveEdit={saveEdit}
          />
        );
      })}
    </div>
  );
}
