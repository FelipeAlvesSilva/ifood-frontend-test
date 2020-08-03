import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { REDUCER_STATE } from '../../reducers/types';
import { AuthState } from '../../store/auth/types';
import { setAccessToken } from '../../store/auth/actions';

import { withTheme } from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { AppTheme } from '../theme/ThemeContext';
import Input from '../styled/Input';
import HeaderNav from '../header/HeaderNav';
import FiltersType from '../filters/Filters';
import Playlists from '../playlist/Playlists';

import { spotifyAPI } from '../../services/spotifyApi';
import { REFRESH_TOKEN_BASE_URL, REDIRECT_URI, CLIENT_ID, CLIENT_SECRET } from '../../utils/constraints';

const Home = (props) => {
  const themeToggle = AppTheme();
  const [searchValue, setSearchValue] = useState('');
  const [token, setToken] = useState<AuthState>({ accessToken: { token: '', tokenType: '', expires: 0 } });

  const dispatch = useDispatch();
  // const stateSelector = useSelector<REDUCER_STATE>(state => state.authReducer);

  useEffect(() => {
    mapTokenValues(window.location.hash);
  }, []);

  useEffect(() => {
    dispatch(setAccessToken(token));
    setTimeout(() => {
      requestNewToken();
    }, token.accessToken.expires * 1000);
  }, [token]);

  const requestNewToken = () => {
    let config = {
      headers: {
        Authorization: "Basic " + CLIENT_ID + CLIENT_SECRET
      }
    };

    let data = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'grant_type': 'authorization_code',
      'code': token.accessToken.token,
      'redirect_uri': REDIRECT_URI,
      'client_id': CLIENT_ID, //🤔
      'client_secret': CLIENT_SECRET //🤔
    };

    spotifyAPI.post(REFRESH_TOKEN_BASE_URL, data, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      })
  };

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
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search..."
        prefix={<FaSearch className="mb-2 mt-2 mr-3 ml-2" />}
      />
      <FiltersType />
      <Playlists />
    </Fragment>
  );
};

// HOC to obtain theme prop
export default withTheme(Home);

/**
   * Listeners:
   *  - Token - how refresh token? 🤔
   *  - Refresh featured playlists
 */