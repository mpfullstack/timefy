/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2018-05-25T17:35:20+02:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-25T19:48:07+02:00
 */

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import BaseLayout from '../components/layout/baseLayout';
import Content from '../components/layout/content';
import AppNavigation from '../components/layout/appNavigation';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  })
});

class Clients extends Component {
  render() {
    // const { classes } = this.props;
    return (
      <BaseLayout>
        <AppNavigation />
        <Content>
          <div>Tasks</div>
        </Content>
      </BaseLayout>
    );
  }
}

export default withStyles(styles)(Clients);
