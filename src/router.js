import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home'
import Stepper from './containers/stepper';
import Page1 from './containers/page1';
import Page2 from './containers/page2';
import Success from './components/success';

class Router extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          path='/page1'
          render={(props) => (
            <Stepper
              {...props}
              pageNumber={1}
              content={Page1}
            />
          )}
        />
        <Route
          path='/page2'
          render={(props) => (
            <Stepper
              {...props}
              pageNumber={2}
              content={Page2}
            />
          )}
        />
        <Route
          path='/success'
          render={(props) => (
            <Stepper
              {...props}
              pageNumber={3}
              content={Success}
            />
          )}
        />
      </Switch>
    );
  }
}

export default Router;