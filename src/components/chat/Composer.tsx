import { useState, KeyboardEvent } from "react";
import { useTheme } from '../../../ThemeContext';

type Props = {
  onSend: (text: string) => void;
};

export default function Composer({ onSend }: Props) {
  const [text, setText] = useState("");
  const { colorAccents: colors } = useTheme();

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText(""); // identiskt med gamla App.jsx
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className={`flex items-center gap-[10px] px-3 py-5 border-t border-solid ${colors.sidebarBorder} ${colors.chatBg}`}>
      <input
        className={`flex-1 ${colors.inputBg} ${colors.text} ${colors.inputBorder} rounded-lg px-2.5 py-3 outline-none text-[15px] transition-all duration-200 focus:${colors.bubbleSelf}`}
        type="text"
        placeholder="Write a message…"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKey}
      />
      <button
        className={`px-2.5 py-3 ${colors.bubbleSelf} ${colors.bubbleSelfText} border-0 rounded-lg font-semibold cursor-pointer transition-opacity duration-200 hover:opacity-80`}
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
}
