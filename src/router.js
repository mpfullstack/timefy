/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2018-05-25T17:30:35+02:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-25T22:05:25+02:00
 */



import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './containers/dashboard';
import Clients from './containers/clients';
import Projects from './containers/projects';
import Tasks from './containers/tasks';

const Router = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
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
    </ConnectedRouter>
  );
}

export default connect(state => ({}))(Router);
