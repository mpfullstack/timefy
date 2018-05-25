/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2018-05-24T23:48:02+02:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-25T19:47:54+02:00
 */


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  },
  paper: {
    padding: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 3
  },
});

class Content extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24} className={classes.root}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={4}>
            {this.props.children}
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
