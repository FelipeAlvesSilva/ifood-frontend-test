import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Logon from '../../components/logon/Logon';
import { SPOTIFY_AUTH_BASE_URL } from '../../utils/constraints';

describe('Tests for Logon Component', () => {
  test('Component should not regress', () => {
    const container = render(<Logon />);
    expect(container).toMatchSnapshot();
  });

  xtest('Spotify login action', () => {
    const { getByText } = render(<Logon />);

    fireEvent.click(getByText('Login on Spotify'));
    expect(window.location.href).toEqual(SPOTIFY_AUTH_BASE_URL);
  })
});