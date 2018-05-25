/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2018-05-24T17:14:50+02:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-25T19:47:47+02:00
 */



import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import PeopleIcon from '@material-ui/icons/People';
import BuildIcon from '@material-ui/icons/Build';
import CalendarIcon from '@material-ui/icons/Today';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  list: {
    width: 250,
  },
  link: {
    textDecoration: "none"
    // display: "block"
  }
});

class Sidebar extends Component {
  state = {
    opened: false
  };

  toggleDrawer = () => {
    this.setState({
      opened: !this.state.opened
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <Link to="/clients" className={classes.link}>
            <ListItem button>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Clients" />
            </ListItem>
          </Link>
          <Link to="/projects" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <BuildIcon />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItem>
          </Link>
          <Link to="/tasks" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <CalendarIcon />
              </ListItemIcon>
              <ListItemText primary="Tasks" />
            </ListItem>
          </Link>
        </List>
        {/*<Divider />
        <List>{otherMailFolderListItems}</List>*/}
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton onClick={this.toggleDrawer} aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.opened} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}>
              {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
