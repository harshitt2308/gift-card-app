import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';

export default function ThemeToggle() {
  const { theme, setTheme, themes } = useContext(ThemeContext);

  const handleChange = (e) => setTheme(e.target.value);

  return (
    <div className="fixed top-5 right-5 z-50 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-3 text-sm text-white shadow-neon">
      <label htmlFor="theme-select" className="sr-only">Select Theme</label>
      <select
        id="theme-select"
        value={theme}
        onChange={handleChange}
        className="bg-transparent border border-neon rounded px-2 py-1 text-white outline-none cursor-pointer"
      >
        <option value={themes.dawn}>Dawn</option>
        <option value={themes.night}>Night</option>
        <option value={themes.festival}>Festival</option>
      </select>
      <span>{theme.charAt(0).toUpperCase() + theme.slice(1)} Mode</span>
    </div>
  );
}
