import React from 'react';
import { TiWeatherPartlySunny as Sun } from 'react-icons/ti';
import { GiMoon as Moon } from 'react-icons/gi';
import { Switch } from 'antd';
import { Title } from '../styled/Title';

type HeaderProps = {
  toggle: Function
};

const Header = (props: HeaderProps) => (
  <div>
    <Title className="m-5">
      Spotifood
      <Switch
        onClick={() => props.toggle()}
        style={{ float: 'right' }}
        checkedChildren={<Moon />}
        unCheckedChildren={<Sun />}
        defaultChecked
      />
    </Title>
  </div>
);

export default Header;