import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState } from '../../store/auth/types';
import { setAccessToken, refreshAccessToken } from '../../store/auth/actions';

import { showMessage, MessageTypes } from '../../services/messages';
import { FaSearch } from 'react-icons/fa';
import { AppTheme } from '../theme/ThemeContext';

import Input from '../styled/Input';
import HeaderNav from '../header/HeaderNav';
import FiltersType from '../filters/Filters';
import Playlists from '../playlist/Playlists';
import { REDUCER_STATE } from '../../reducers/types';

const Home = () => {
  const themeToggle = AppTheme();
  // const [searchValue, setSearchValue] = useState('');
  const [token, setToken] = useState<AuthState>({ accessToken: { token: '', tokenType: '', expires: 0 } });

  const selectorAuth = useSelector<REDUCER_STATE, AuthState>(state => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    window.location.replace('http://localhost:3000/home');
    mapTokenValues(window.location.hash);
  }, []);

  useEffect(() => {
    if (token.accessToken.token !== '') {
      dispatch(setAccessToken(token));

      // interval to refresh access token
      setTimeout(() => {
        if (!dispatch(refreshAccessToken(selectorAuth)))
          showMessage('Error on refresh access token', MessageTypes.MESSAGE_ERROR);
      }, selectorAuth.accessToken.expires * 1000);
    }

  }, [token]);

  const mapTokenValues = (hash: string) => {
    const tokenPattern = new RegExp(/(?<=\#access_token=)(.*?)(?=\&)/g);
    const tokenTypePattern = new RegExp(/(?<=\&token_type=)(.*?)(?=\&)/g);
    const tokenTimeoutPattern = new RegExp(/(?<=\&expires_in=)(.*?)+/g);

    const tokenReceived: AuthState = {
      accessToken: {
        token: tokenPattern.exec(hash)?.[0] || '',
        tokenType: tokenTypePattern.exec(hash)?.[0] || '',
        expires: Number.parseInt(tokenTimeoutPattern.exec(hash)?.[0] || '')
      }
    };
    setToken(tokenReceived);
  };

  return (
    <Fragment>
      <HeaderNav toggle={themeToggle.toggle} />
      <Input
        className="m-2"
        // onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search..."
        prefix={<FaSearch className="mb-2 mt-2 mr-3 ml-2" />}
      />
      <FiltersType />
      <Playlists />
    </Fragment>
  );
};

export default Home;

/**
   * Listeners:
   *  - Token - how refresh token? 🤔
   *  - Refresh featured playlists
 */