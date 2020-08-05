import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from '../../components/home/Home';

const mockStore = configureStore([]);
describe('Tests for Home Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  xtest('Home Component should not regress', () => {
    const container = render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});