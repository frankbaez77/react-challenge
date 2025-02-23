import { createContext } from 'react';

const store = {
  color: "#FFFFFF",
  backgroundColor: "darkblue",
}
export const ThemeContext = createContext(store);

export function ThemeProvider({children}) {
    return (
      <ThemeContext.Provider value = {store}>
        {children}
      </ThemeContext.Provider>
    )
  }




