import React from 'react';
import ReactDOM from 'react-dom';
import CustomThemeProvider from './components/theme/ThemeProvider';
import { GlobalStyle } from './components/styled/Wrapper';
import './index.css';
import 'antd/dist/antd.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <CustomThemeProvider>
      <GlobalStyle />
      <App />
    </CustomThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// https://medium.com/swlh/using-the-react-redux-hooks-api-to-manipulate-store-state-664d7cf27521
// https://medium.com/@RossWhitehouse/setting-up-eslint-in-react-c20015ef35f7
// https://dev.to/benweiser/how-to-set-up-eslint-typescript-prettier-with-create-react-app-3675 