import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { RiHomeSmileLine as Home } from 'react-icons/ri';
import { AppTheme } from '../theme/ThemeContext';
import HeaderNav from '../header/HeaderNav';
import { Row, Col } from 'antd';

const Fail = () => {
  const themeToggle = AppTheme();

  return (
    <Fragment>
      <HeaderNav toggle={themeToggle.toggle} />
      <Row className="mt-6">
        <Col flex={2} style={{ textAlign: 'end' }}>
          <h1 style={{ fontWeight: "bold" }} className="display-4">:(</h1>
        </Col>
        <Col flex={3} style={{ textAlign: 'center' }}>
          <h1 style={{ fontWeight: "bold" }} className="display-4">Page not Found.</h1>
          <p className="lead">Sorry, we couldn't find what you were looking for, please try again.</p>
          <div>
            <Home className="m-2" size='2rem' />
            <Link to="/home">
              Go to homepage
            </Link>
          </div>
        </Col>
      </Row>
    </Fragment>
  )
};

export default Fail;