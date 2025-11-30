import { useState } from "react";

type Props = {
  onChange: (value: boolean) => void;
};

export default function Anonymous({ onChange }: Props) {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    const v = !checked;
    setChecked(v);
    onChange(v);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`anon-btn ${checked ? "active" : ""}`}
      title={checked ? "Sending anonymously" : "Send anonymous"}
    >
      👻
    </button>
  );
}
