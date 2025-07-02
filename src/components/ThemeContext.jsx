import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const themes = {
  dawn: 'dawn',
  night: 'night',
  festival: 'festival',
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.night);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}
