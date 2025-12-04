import { useState } from "react";

const DropDownColor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [color, setColor] = useState("Blue");
  const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

  const [bg, setBg] = useState<string>("");
  const [sidebarBg, setSidebarBg] = useState<string>("");
  const [sidebarBorder, setsidebarBorder] = useState<string>("");
  const [chatBg, setchatBg] = useState<string>("");
  const [text, settext] = useState<string>("");
  const [inputBg, setinputBg] = useState<string>("");
  const [inputBorder, setinputBorder] = useState<string>("");
  const [bubbleSelf, setbubbleSelf] = useState<string>("");
  const [bubbleSelfText, setbubbleSelfText] = useState<string>("");
  const [bubbleOther, setbubbleOther] = useState<string>("");
  const [bubbleOtherText, setbubbleOtherText] = useState<string>("");

  const colorsMap: {
    [theme: string]: {
      [accent: string]: {
        bg: string;
        sidebarBg: string;
        sidebarBorder: string;
        chatBg: string;
        text: string;
        inputBg: string;
        inputBorder: string;
        bubbleSelf: string;
        bubbleSelfText: string;
        bubbleOther: string;
        bubbleOtherText: string;
      };
    };
  } = {
    Light: {
      Red: {
        bg: "#ffffff",
        sidebarBg: "#f7f7f7",
        sidebarBorder: "#ddd",
        chatBg: "#ffffff",
        text: "#000000",
        inputBg: "#f3f3f3",
        inputBorder: "#ddd",
        bubbleSelf: "#ff4d4f",
        bubbleSelfText: "#ffffff",
        bubbleOther: "#f0f0f0",
        bubbleOtherText: "#000000",
      },
      Blue: {
        bg: "#ffffff",
        sidebarBg: "#f7f7f7",
        sidebarBorder: "#ddd",
        chatBg: "#ffffff",
        text: "#000000",
        inputBg: "#f3f3f3",
        inputBorder: "#ddd",
        bubbleSelf: "#0078ff",
        bubbleSelfText: "#ffffff",
        bubbleOther: "#f0f0f0",
        bubbleOtherText: "#000000",
      },
    },
    Dark: {
      Red: {
        bg: "#1a1a1a",
        sidebarBg: "#222222",
        sidebarBorder: "#333333",
        chatBg: "#1c1c1c",
        text: "#f5f5f5",
        inputBg: "#2a2a2a",
        inputBorder: "#444444",
        bubbleSelf: "#ff4d4f",
        bubbleSelfText: "#ffffff",
        bubbleOther: "#2f2f2f",
        bubbleOtherText: "#ffffff",
      },
      Blue: {
        bg: "#1a1a1a",
        sidebarBg: "#222222",
        sidebarBorder: "#333333",
        chatBg: "#1c1c1c",
        text: "#f5f5f5",
        inputBg: "#2a2a2a",
        inputBorder: "#444444",
        bubbleSelf: "#0078ff",
        bubbleSelfText: "#ffffff",
        bubbleOther: "#2f2f2f",
        bubbleOtherText: "#ffffff",
      },
    },
  };

  export default function ChatTheme() {
    const [colorAccents, setColorAccents] = useState({
      "bg-color": "#ffffff",
      "bg-sidebar": "#f7f7f7",
      "bg-chat": "#ffffff",
      "text-color": "#000000",
      "bg-input": "#f3f3f3",
      "border-input": "#ddd",
      "bg-bubble-self": "#0078ff",
      "text-bubble-self": "#ffffff",
      "bubble-other": "#f0f0f0",
      "text-bubble-other": "#000000",
    });

    const updateTheme = (theme: string, accent: string) => {
      const selected = colorsMap[theme][accent];
      setColorAccents({
        "bg-color": selected.bg,
        "bg-sidebar": selected.sidebarBg,
        "bg-chat": selected.chatBg,
        "text-color": selected.text,
        "bg-input": selected.inputBg,
        "border-input": selected.inputBorder,
        "bg-bubble-self": selected.bubbleSelf,
        "text-bubble-self": selected.bubbleSelfText,
        "bubble-other": selected.bubbleOther,
        "text-bubble-other": selected.bubbleOtherText,
      });
    };

    return (
      <div className={colorAccents["bg-color"]}>
        <h1 className={colorAccents["text-color"]}>Hello Chat</h1>
        <button onClick={() => updateTheme("Dark", "Blue")}>Dark Blue</button>
        <button onClick={() => updateTheme("Light", "Red")}>Light Red</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}> 🎨 </button>
      {isOpen && (
        <div>
          <ul>
            <li>
              <button onClick={() => setTheme("dark")}>
                <p>🌙 Dark Theme</p>
              </button>
            </li>
            <li>
              <button onClick={() => setTheme("light")}>
                <p>☀️ Light Theme</p>
              </button>
            </li>
          </ul>
          {theme === "light" ? (
            <ul className="absolute">
              {colors.map((color: string) => (
                <li>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setColor(color);
                    }}
                  >
                    {color}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="absolute">
              {colors.map((color: string) => (
                <li>
                  <button
                    onClick={() => {
                      setColor(color);
                      setIsOpen(false);
                    }}
                  >
                    {color}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
export default DropDownColor;
