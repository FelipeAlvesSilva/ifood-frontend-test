import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import CustomThemeProvider from './components/theme/ThemeProvider';
import './index.css';
import 'antd/dist/antd.css';
import App from './components/app/App';
import { GlobalStyle } from './components/styled/Wrapper';

ReactDOM.render(
  <CustomThemeProvider>
    <GlobalStyle />
    <App />
  </CustomThemeProvider>,
  document.getElementById('root')
);

// https://medium.com/@Charles_Stover/optimal-file-structure-for-react-applications-f3e35ad0a145
// https://medium.com/@RossWhitehouse/setting-up-eslint-in-react-c20015ef35f7
// https://medium.com/@rossbulat/react-dark-mode-with-styled-theming-and-context-57557de6400
// https://dev.to/benweiser/how-to-set-up-eslint-typescript-prettier-with-create-react-app-3675 