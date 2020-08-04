import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../../utils/matchMedia.mock'
import Fail from '../../components/fail/Fail';

describe('Page not found component tests', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('Should not regress', () => {
    const compRender = render(
      <Router>
        <Fail />
      </Router>
    );
    expect(compRender).toMatchSnapshot();
  });
});