import React, { createContext, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage' // Importe useLocalStorage

type Theme = 'light' | 'dark'
interface IThemeContext {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', 'light') as [Theme, React.Dispatch<React.SetStateAction<Theme>>]

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): IThemeContext => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}