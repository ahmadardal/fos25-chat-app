import { useState } from "react";

const DropDownColor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}> 🎨 </button>
      {isOpen && (
        <div>
          <ul>
            <li>
              <button onClick={() => setTheme("dark") }>
                <p>🌙 Dark Theme</p>
              </button>
            </li>
            <li>
              <button onClick={() => setTheme("light") }>
                <p>☀️ Light Theme</p>
              </button>
            </li>
          </ul>
          {theme === "light" ?  
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
            : 
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
        }
        </div>
      )}
    </div>
  );
};
export default DropDownColor;
