import { createGlobalStyle } from 'styled-components';
import { background, text } from '../theme/theme';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${background};
    color: ${text};
    margin-left: auto;
    margin-right: auto;
    max-width: 52rem;
    padding: 0.605rem 1.3125rem;
  }

  .custom-link,
  .custom-link:hover {
    color:inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, p {
    color: ${text};
  }
`;