import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import GetStarted from './GetStarted';
import UserForm from './UserForm';
// import Member from './Member';
// import Jane from './Jane';

class Router extends React.Component {
  render() {

    return (
      <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>

            <Route exact path='/' component={LandingPage} />
            <Route path='/GetStarted' component={GetStarted} />
            <Route path='/UserForm' component={UserForm} />



        </BrowserRouter>
      </div>
    );
  }
}

export default Router;