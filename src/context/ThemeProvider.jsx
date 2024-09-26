// src/context/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create a ThemeContext
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize theme state ('light' or 'dark')
  const [theme, setTheme] = useState('light');

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Store the theme in localStorage to remember the choice
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Update localStorage when the theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
