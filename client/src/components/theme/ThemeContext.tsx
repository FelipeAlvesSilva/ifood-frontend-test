import React, { useContext, createContext } from 'react';

export const ToggleThemeContext = createContext({
  toggle: () => { }
});

export const appTheme = () => useContext(ToggleThemeContext);