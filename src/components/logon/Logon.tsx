import React from 'react';
import styled from 'styled-components';
import { Button } from '../styled/Button';
import SpotifyBrandIcon from '../../images/Spotify_Icon_CMYK_Black.png';
import { SPOTIFY_AUTH_BASE_URL } from '../../utils/constraints';

const BrandLogo: any = styled.img.attrs({
  src: `${SpotifyBrandIcon}`,
  alt: 'Spotify brand logo'
})`
  height: 120px;
  width: 120px;
  margin-left: auto;
  margin-right: auto;
  margin: 15px;
`;

const Logon = () => {
  const handleUserLogin = () => {
    window.location.href = SPOTIFY_AUTH_BASE_URL;
  };

  return (
    <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '30rem', textAlign: 'center', padding: '4rem 0rem' }}>
      <BrandLogo />
      <h2 className='display-4'>Welcome to Spotifood</h2>
      <p className="lead">
        Here you can find all the most played playlists of the moment according to your profile <span className="bounce" role="img" aria-label="Headhphone emoji">🎧</span>
      </p>
      <Button block onClick={() => handleUserLogin()}>Login on Spotify</Button>
    </div>
  )
};

export default Logon;