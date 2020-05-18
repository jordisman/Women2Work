import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import Welcome from './Welcome';
import Member from './Member';
import Intro from './Intro';

import UserForm from './UserForm';


class Router extends React.Component {
  render() {

    return (
      <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>

            <Route exact path='/' component={LandingPage} />
            <Route path='/Intro' component={Intro} />
            <Route path='/UserForm' component={UserForm} />
            <Route path='/Welcome' component={Welcome} />
            <Route path='/Member' component={Member} />


        </BrowserRouter>
      </div>
    );
  }
}

export default Router;