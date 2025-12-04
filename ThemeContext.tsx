
  import { useState, createContext, useContext } from "react";
  import type { ReactNode } from "react";
  import bgColorMap from "./backgroundColorMap"
  type Theme = "Light" | "Dark"
  type Accent = "Red" | "Blue" | "Green" | "Yellow" | "Purple"

  interface ThemeContextType {
    theme:Theme;
    accent:Accent;
    colorAccents: any;
    setTheme: (theme: Theme) => void;
    setAccent: (accent: Accent) => void;
    updateTheme: (theme: Theme, accent: Accent) => void;
  }
  
  const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

  export const ThemeProvider = ({children}: {children:ReactNode}) =>{
    const [theme, setTheme] = useState<Theme>("Light")
    const [accent, setAccent] = useState<Accent>("Blue")

    const [colorAccents, setColorAccents] = useState(bgColorMap[theme][accent]) 
  
    const updateTheme = (newTheme: Theme, newAccent: Accent) => {
      setTheme(newTheme)
      setAccent(newAccent)
      setColorAccents(bgColorMap[theme][accent])
    }
    return (
      <ThemeContext.Provider
      value={{theme, accent, colorAccents, setTheme, setAccent, updateTheme}}>
        {children}
      </ThemeContext.Provider>
    )
  }

  export const useTheme = () => {
    const context= useContext(ThemeContext)
    if (!context) throw new Error("useTheme must be used within ThemeProvider")
      return context
  }