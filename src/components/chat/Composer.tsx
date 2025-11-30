import { useState, KeyboardEvent } from "react";
import Anonymous from "./Anonymous";


type Props = {
  onSend: (text: string,
      anonymous: boolean

  ) => void
  onChange: (value: boolean) => void

};

export default function Composer({ onSend }: Props) {
  const [text, setText] = useState("");
    const [anonymous, setAnonymous] = useState(false)


  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text, anonymous);
    setText(""); 
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
        <Anonymous onChange={(v) => setAnonymous(v)} />

<button
  type="button"
  onClick={handleSend}
  className={`send-btn ${anonymous ? "is-anon" : ""}`}
>
  {anonymous ? "Anonymous" : "Send"}
</button>
    </div>
  );
}
