import theme from 'styled-theming';

// convention to have only string values on theme function props
export const background = theme('app-mode', {
  light: 'fafafa',
  dark: '#222'
});

export const text = theme('app-mode', {
  light: '#000',
  dark: '#fff'
});