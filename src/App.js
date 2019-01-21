import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@mdi/react';
import Link from '@material-ui/core/Link';
import { mdiTelevisionBox, } from '@mdi/js';
import { withStyles } from '@material-ui/core/styles';
import Me from './Images/SeilaBecirovic.jpg';
import Avatar from '@material-ui/core/Avatar';
const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 300,
    margin: '0 auto',
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  bigAvatar: {
    margin: 0,
    width: 300,
    height: 300,
  },
});


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const goodreads = "M17,12.77C15.96,14.42 14.22,15.5 12.25,15.5C9.07,15.5 6.5,12.7 6.5,9.25C6.5,5.8 9.07,3 12.25,3C14.22,3 15.96,4.08 17,5.73V3H18V15.25C18,20.71 14.54,21 11.5,21C9,21 7.55,19.31 7.13,17H8.14C8.5,18.75 9.54,20 11.5,20C13.72,20 17,20.05 17,15.25V15.25L17,12.77M12.25,4C9.63,4 7.5,6.35 7.5,9.25C7.5,12.15 9.63,14.5 12.25,14.5C14.87,14.5 17,12.15 17,9.25C17,6.35 14.87,4 12.25,4Z"
    const cards = [1, 2, 3, 4, 5, 6];
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
          <Avatar alt="me" src={Me} className={classes.bigAvatar} />
            <div className={classes.heroContent}>              
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Šeila Bećirović
          </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                Jill of all trades, Bachelor of one, Masters of none (TBD)...
          </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Main call to action
                </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary action
                </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            {/* End hero unit */}
            <Grid container spacing={40}>
              {cards.map(card => (
                <Grid item key={card} sm={10} md={6} lg={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Heading
                  </Typography>
                      <Typography>
                        This is a media card. You can use this section to describe the content.
                  </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                  </Button>
                      <Button size="small" color="primary">
                        Edit
                  </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h4" align="center" gutterBottom>
            How am I a Nerd? Check out some of my other interests:
      </Typography>
          <Typography variant="h5" align="center" color="textSecondary" component="p">
            <Link href="https://goodreads.com/seilabecirovic" className={classes.link}>
              <Icon path={goodreads}
                size={3}
                color="purple" />
            </Link>
            <Link href="https://www.tvtime.com/en/user/4907527/profile" className={classes.link}>
              <Icon path={mdiTelevisionBox}
                size={3}
                color="purple" />
            </Link>
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment >
    );

  }

}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);
