import React from 'react';
import { render } from '@testing-library/react';
import Filters from '../../components/filters/Filters';

describe('Filters component tests', () => {
  test('Should not regress', () => {
    const compRender = render(<Filters />);
    expect(compRender).toMatchSnapshot();
  });
});