import theme from 'styled-theming';

// convention to have only string values on theme function props
export const background = theme('mode', {
  light: '#fff',
  dark: '#282c35'
});

export const text = theme('mode', {
  light: '#222',
  dark: '#ffffffe0'
});