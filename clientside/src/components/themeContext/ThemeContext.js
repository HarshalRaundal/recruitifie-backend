import React, { createContext, useState } from 'react';

// Create a new context
const ThemeContext = createContext();

// Create a provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({backgroundColor:"#172742",color:"#FFFFFF"}); // Set the initial theme
  const updateTheme = (component) => {
    setTheme((prevComponents) => [...prevComponents, component]);
  };

  // Provide the theme and toggleTheme function to the children components
  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
