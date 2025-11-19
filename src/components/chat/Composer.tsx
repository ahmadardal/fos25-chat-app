import { useState, KeyboardEvent } from "react";

type Props = {
  onSend: (text: string) => void;
};

export default function Composer({ onSend }: Props) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText(""); // identiskt med gamla App.jsx
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="tg-composer">
      <input
        className="tg-input"
        type="text"
        placeholder="Write a message…"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKey}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
