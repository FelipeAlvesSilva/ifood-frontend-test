import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ToggleThemeContext } from '../theme/ThemeContext';

const CustomThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState({ mode: 'light' });

  const toggle = () => {
    const mode = themeMode.mode === 'light'
      ? 'dark'
      : 'light';

    setThemeMode({ mode });
  };

  return (
    <ToggleThemeContext.Provider value={{ toggle }}>
      <ThemeProvider theme={{ mode: themeMode.mode }}>
          {children}
      </ThemeProvider>
    </ToggleThemeContext.Provider>
  );
}

export default CustomThemeProvider;