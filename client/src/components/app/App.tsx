import React from 'react';
import { withTheme } from 'styled-components';
import { TiWeatherPartlySunny as Sun } from 'react-icons/ti';
import { GiMoon as Moon } from 'react-icons/gi';
import { Switch } from 'antd';
import { appTheme } from '../theme/ThemeContext';

function App() {
  const themeToggle = appTheme();

  return (
    <div>
      <Switch
        onClick={() => themeToggle.toggle()}
        checkedChildren={<Moon />}
        unCheckedChildren={<Sun />}
        defaultChecked
      />
    </div>
  );
}

// HOC to obtain theme prop
export default withTheme(App);
