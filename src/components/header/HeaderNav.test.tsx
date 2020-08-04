import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderNav from '../../components/header/HeaderNav';

describe('Tests for Header component', () => {
  test('Component should not regress', () => {
    const container = render(
      <Router>
        <HeaderNav toggle={jest.fn()} />
      </Router>);
    expect(container).toMatchSnapshot();
  });
});