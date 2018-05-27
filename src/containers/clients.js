/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2018-05-25T17:35:20+02:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-27T17:22:06+02:00
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import BaseLayout from '../components/layout/baseLayout';
import Content from '../components/layout/content';
import AppNavigation from '../components/layout/appNavigation';
import globalActions from '../redux/globalActions';

const styles = theme => ({
  root: {}
});

class Clients extends Component {
  componentDidMount() {
    this.props.requestItems('clients');
  }

  render() {
    const { clients } = this.props;
    return (
      <BaseLayout>
        <AppNavigation />
        <Content>
          <div>Clients</div>
          {
            clients.map(client => <p>{client.name}</p>)
          }
        </Content>
      </BaseLayout>
    );
  }
}

const mapStateToProps = state => ({
  clients: state.Clients.get('clients')
});

const { requestItems } = globalActions;

export default connect(mapStateToProps, {
  requestItems,
})(withStyles(styles)(Clients));
