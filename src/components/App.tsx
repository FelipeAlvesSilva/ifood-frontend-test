import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './home/Home';
import Logon from './logon/Logon';
import Fail from './fail/Fail';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Logon} />
          <Route path="/home" exact component={Home} />
          <Route path="/fail" exact component={Fail} />
          <Redirect from="*" to="/fail" />
        </Switch>
      </Router>
    </Fragment>
  )
};

export default App;