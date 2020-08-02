import React, { Fragment } from 'react';
import { withTheme } from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { AppTheme } from '../theme/ThemeContext';
import { CInput as Input } from '../styled/Input';
import HeaderNav from '../header/HeaderNav';
import Filters from '../filters/Filters';

const Home = (props) => {
  // const [searchValue, setSearchValue] = useState('');
  const themeToggle = AppTheme();

  return (
    <Fragment>
      <HeaderNav toggle={themeToggle.toggle} />
      <Input
        className="m-3"
        // onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search..."
        prefix={<FaSearch className="mb-2 mt-2 mr-3 ml-2" />}
      />
      <Filters />
    </Fragment>
  );
}

// HOC to obtain theme prop
export default withTheme(Home);
