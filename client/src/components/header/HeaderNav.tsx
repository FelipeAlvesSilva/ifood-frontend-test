import React from 'react';
import { Link } from 'react-router-dom';
import SpotifyLogo from '../../images/Spotify_Icon_CMYK_Green.png'
import { FaSun as Sun } from 'react-icons/fa';
import { IoMdMoon as Moon } from 'react-icons/io';
import { Switch } from 'antd';
import { Title } from '../styled/Title';

type HeaderProps = {
  toggle: Function
};

const Header = (props: HeaderProps) => (
  <div className="container my-4">
    <Title className="m-5">
      <img className="mr-3" src={SpotifyLogo} alt="Spotify brand icon" style={{ height: '60px', width: '60px' }} />
      <Link to="/home">
        Spotifood
      </Link>
      <Switch
        onClick={() => props.toggle()}
        style={{ float: 'right' }}
        checkedChildren={<Moon className="switcher-icon" />}
        unCheckedChildren={<Sun className="switcher-icon" />}
        defaultChecked
      />
    </Title>
  </div>
);

export default Header;