/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2018-05-24T23:48:02+02:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-25T19:32:39+02:00
 */


import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Layout extends Component {
  render() {
    return (
      <Grid container>
        {this.props.children}
      </Grid>
    );
  }
}

export default Layout;
