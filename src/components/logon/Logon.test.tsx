import React from 'react';
import { render, fireEvent, getByText, screen } from '@testing-library/react';
import Logon from '../../components/logon/Logon';
import { SPOTIFY_AUTH_BASE_URL } from '../../utils/constraints';
import { Button } from '../styled/Button';

describe('Tests for Logon Component', () => {
  test('Component should not regress', () => {
    const container = render(<Logon />);
    expect(container).toMatchSnapshot();
  });

  xtest('Spotify login action', () => {
    const mockBtnCallback = jest.fn();
    const element = screen.getByText('Login on Spotify');

    element.onclick = mockBtnCallback;
    fireEvent.click(element);

    expect(mockBtnCallback.mock.calls.length).toEqual(1);
  })
});