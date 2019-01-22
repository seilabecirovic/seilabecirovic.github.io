import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Icon from '@mdi/react';
import Link from '@material-ui/core/Link';
import { mdiTelevisionBox } from '@mdi/js';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  footer: {
    padding: theme.spacing.unit * 6,
    color: 'white'
  },
});


class Nerd extends Component {
  render() {
    const goodreads = 'M17,12.77C15.96,14.42 14.22,15.5 12.25,15.5C9.07,15.5 6.5,12.7 6.5,9.25C6.5,5.8 9.07,3 12.25,3C14.22,3 15.96,4.08 17,5.73V3H18V15.25C18,20.71 14.54,21 11.5,21C9,21 7.55,19.31 7.13,17H8.14C8.5,18.75 9.54,20 11.5,20C13.72,20 17,20.05 17,15.25V15.25L17,12.77M12.25,4C9.63,4 7.5,6.35 7.5,9.25C7.5,12.15 9.63,14.5 12.25,14.5C14.87,14.5 17,12.15 17,9.25C17,6.35 14.87,4 12.25,4Z'
    const { classes } = this.props;
    return (
      <React.Fragment>
        <footer className={classes.footer}>        
          <Typography variant='h4' align='center' color='inherit' gutterBottom>
            How am I a Nerd? Check out some of my other interests:
          </Typography>
          <Typography variant='h5' align='center' color='inherit' component='p'>
            <Link href='https://goodreads.com/seilabecirovic' className={classes.link}>
              <Icon path={goodreads}
                size={3}
                color='#cbd0ec' />
            </Link>
            <Link href='https://www.tvtime.com/en/user/4907527/profile' className={classes.link}>
              <Icon path={mdiTelevisionBox}
                size={3}
                color='#cbd0ec' />
            </Link>
          </Typography>
        </footer>
      </React.Fragment >
    );

  }

}
Nerd.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Nerd);
