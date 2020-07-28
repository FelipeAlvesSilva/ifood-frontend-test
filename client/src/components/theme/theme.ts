import theme from 'styled-theming';

// convention to have only string values on theme function props
export const background = theme('mode', {
  light: '#eee',
  dark: '#222'
});

export const text = theme('mode', {
  light: '#000',
  dark: '#fff'
});

export const btnBackground = theme('mode', {
  light: '#222',
  dark: '#eee'
});

export const btnText = theme('mode', {
  light: '#fff',
  dark: '#000'
});