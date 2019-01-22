import React, { Component } from 'react';
import Nerd from './Nerd';
import About from './About';
import Portfolio from './Portfolio';
import Background from './Images/background.jpg';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paperContainer: {
    backgroundImage: `url(${Background})`
  }
});


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.paperContainer}>
          <About />
          <Portfolio />
          <Nerd />
        </main>
      </React.Fragment >
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
