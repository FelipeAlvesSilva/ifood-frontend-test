import React, { useState, Fragment } from 'react';
import { withTheme } from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { appTheme } from '../theme/ThemeContext';
import { CInput as Input } from '../styled/Input';
import HeaderNav from '../header/HeaderNav';

function App(props) {
  const [searchValue, setSearchValue] = useState('');
  const themeToggle = appTheme();

  return (
    <Fragment>
      <div className="container">
        <HeaderNav toggle={themeToggle.toggle} />
      </div>
      <Input
        className="m-3"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search..."
        prefix={<FaSearch className="mb-2 mt-2 mr-3 ml-2" />}
      />
    </Fragment>
  );
}

// HOC to obtain theme prop
export default withTheme(App);
