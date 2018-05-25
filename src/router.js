/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2018-05-25T17:30:35+02:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-25T19:11:37+02:00
 */



import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './containers/dashboard';
import Clients from './containers/clients';
import Projects from './containers/projects';
import Tasks from './containers/tasks';

class Router extends Component  {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={'/'}
            component={Dashboard} />
          <Route
            exact
            path={'/clients'}
            component={Clients} />
          <Route
            exact
            path={'/projects'}
            component={Projects} />
          <Route
            exact
            path={'/tasks'}
            component={Tasks} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
