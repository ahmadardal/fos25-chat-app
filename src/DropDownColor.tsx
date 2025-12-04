import { useEffect, useState } from "react";
import bgColorMap from "../backgroundColorMap";
import { useTheme } from '../ThemeContext';

const DropDownColor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, accent, updateTheme } = useTheme();

  useEffect(() => {
    updateTheme(theme,accent)
  })

  return (
    <div className="bg-transparent p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl cursor-pointer 
        transition-transform duration-200 
        hover:scale-110"
      >
        🎨
      </button>



      {isOpen && (
        <div className={`mt-2 fixed z-50 rounded-lg shadow-lg ${bgColorMap[theme][accent].sidebarBg} ${bgColorMap[theme][accent].sidebarBorder}`}>
          <ul className="p-2">
            {theme === "Dark" ? (
              <button
                onClick={() => {
                  updateTheme("Light", accent);
                }}
                className={`cursor-pointer w-full px-4 py-2 text-left ${bgColorMap[theme][accent].text} hover:bg-gray-700 rounded transition-colors duration-150`}
              >
                ☀️ Light Theme
              </button>
            ) : (
              <button
                onClick={() => {
                  updateTheme("Dark", accent);
                }}
                className={`cursor-pointer w-full px-4 py-2 text-left ${bgColorMap[theme][accent].text} hover:bg-gray-200 rounded transition-colors duration-150`}
              >
                🌙 Dark Theme
              </button>
            )}
          </ul>

          <ul className={`border-t p-2 flex flex-col ${bgColorMap[theme][accent].sidebarBorder}`}>
            {Object.keys(bgColorMap[theme]).map((value) => (
              <li key={value}>
                <button
                  className={`cursor-pointer w-full px-4 py-2 text-left ${bgColorMap[theme][accent].text} hover:bg-gray-200 rounded transition-colors duration-150 flex justify-between items-center`}
                  onClick={() => {
                    updateTheme(theme, value as "Red" | "Blue" | "Green" | "Yellow" | "Purple");
                    setIsOpen(false);
                    }}
                >
                  {value}
                  <div className={`w-4 h-4 rounded-full ${bgColorMap[theme][value as "Red" | "Blue" | "Green" | "Yellow" | "Purple"].bubbleSelf}`} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownColor;
