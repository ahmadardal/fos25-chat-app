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
    <div className="flex items-center gap-[10px] px-[12px] py-[20px] border-t-1 border-solid border-[var(--tg-sidebar-border)]">
      <input
        className="flex-1 px-[10px] py-[12px] border-1 border-solid border-[var(--tg-input-border)] rounded-[8px] 
        outline-none text-[15px] transition-border-color duration-200 focus:border-[var(--tg-bubble-self)] "
        type="text"
        placeholder="Write a message…"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKey}
      />
      <button
        className="px-[10px] py-[12px] bg-[var(--tg-bubble-self)] text-[var(--tg-bubble-self-text)] rounded-[8px] font-semibold 
      cursor-pointer transition-opacity duration-200 ease-linear hover:opacity-[0.85]"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
}
