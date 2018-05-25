/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2018-05-25T17:35:20+02:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-25T22:05:41+02:00
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
    const { items } = this.props;
    return (
      <BaseLayout>
        <AppNavigation />
        <Content>
          <div>Clients</div>
          {
            items.map(item => <p>{item.name}</p>)
          }
        </Content>
      </BaseLayout>
    );
  }
}

const mapStateToProps = state => ({
  items: state.Clients.get('items')
});

const { requestItems } = globalActions;

export default connect(mapStateToProps, {
  requestItems,
})(withStyles(styles)(Clients));
