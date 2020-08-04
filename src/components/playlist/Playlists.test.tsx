import React from 'react';
import { render } from '@testing-library/react';
import Playlists from './Playlists';

describe('Playlists component tests', () => {
  test('Component should not regress', () => {
    const container = render(<Playlists />);
    expect(container).toMatchSnapshot();
  });
});