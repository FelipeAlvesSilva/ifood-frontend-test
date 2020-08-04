import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

describe('Tests of App Component', () => {
  test('Component should not regress', () => {
    const componentContainer = render(<App />);
    expect(componentContainer).toMatchSnapshot();
  })
});

/**
 * Keep in mind:
  
  - Do the tests I am proposing to write help prevent regression?
  - Do these tests test how a user will interact with this feature?
  - If you find it difficult to test your React components they should probably be rewritten.
 * 
 */