import react, { useContext, createContext } from 'React';
import styled, { ThemeProvider } from 'styled-components';
import { background, text } from './theme';

const toggleThemeContext = createContext({
  toggle: () => { }
});

export const appTheme = () => useContext(toggleThemeContext);