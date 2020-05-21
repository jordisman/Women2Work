import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import Welcome from './Welcome';
import Mentor from './Mentor';
import Mentee from './Mentee';
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
            <Route path='/Mentee' component={Mentee} />
            <Route path='/Mentor' component={Mentor} />


        </BrowserRouter>
      </div>
    );
  }
}

export default Router;