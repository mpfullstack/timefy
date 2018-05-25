/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2018-05-25T17:58:22+02:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-25T19:32:24+02:00
 */

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Sidebar from './sidebar';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class AppNavigation extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Sidebar />
      </div>
    );
  }
}

export default withStyles(styles)(AppNavigation);
