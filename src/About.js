import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Icon from '@mdi/react';
import Link from '@material-ui/core/Link';
import Fade from '@material-ui/core/Fade';
import { mdiGmail, mdiGithubBox, mdiTelegram, mdiLinkedinBox, mdiGithubCircle,mdiTelevisionBox } from '@mdi/js';
import { withStyles } from '@material-ui/core/styles';
import Me from './Images/SeilaBecirovic.jpg';
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';

const styles = theme => ({
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
        display: 'block',
        // backgroundColor: theme.palette.background.paper,
        width: 'auto',
        margin: 0,

    },
    heroImage: {
        align: 'center',
        width: '20%',
        margin: '0',
        marginTop: '1%',
        display: 'inline-block',
        marginLeft: '17.5%',
        padding: '1%',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            alignContent: 'center',
            width: '100%',
            margin: '0 auto',
            padding: '1%',
        },
    },
    heroContent: {
        align: 'center',
        width: '45%',
        margin: '0',
        display: 'inline-block',
        marginRight: '17%',
        color: 'white',
        marginTop: '1%',
        padding: '1%',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            align: 'center',
            width: '100%',
            margin: '0 auto',
            padding: '1%',
        },
    },
    heroButtons: {
    },
    bigAvatar: {
        width: theme.spacing.unit * 28.999,
        height: theme.spacing.unit * 28.999,
    },
    popover: {
        pointerEvents: 'none',
        color: 'white',

    },

});


class About extends Component {
    state = {
        anchorEl: null,
    };
    handlePopoverOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handlePopoverClose = () => {
        this.setState({ anchorEl: null });
    };
    

    render() {
        const goodreads = 'M17,12.77C15.96,14.42 14.22,15.5 12.25,15.5C9.07,15.5 6.5,12.7 6.5,9.25C6.5,5.8 9.07,3 12.25,3C14.22,3 15.96,4.08 17,5.73V3H18V15.25C18,20.71 14.54,21 11.5,21C9,21 7.55,19.31 7.13,17H8.14C8.5,18.75 9.54,20 11.5,20C13.72,20 17,20.05 17,15.25V15.25L17,12.77M12.25,4C9.63,4 7.5,6.35 7.5,9.25C7.5,12.15 9.63,14.5 12.25,14.5C14.87,14.5 17,12.15 17,9.25C17,6.35 14.87,4 12.25,4Z'
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <React.Fragment>
                <Fade in='true' style={{ transformOrigin: '0 0 0' }}
                            {... { timeout: 5000} }>
                <div className={classes.heroUnit}>
                    <div className={classes.heroImage} align='center' >
                        <Avatar alt='me' src={Me} className={classes.bigAvatar}
                            aria-owns={open ? 'mouse-over-popover' : undefined}
                            aria-haspopup='true'
                            onMouseEnter={this.handlePopoverOpen}
                            onMouseLeave={this.handlePopoverClose} />
                        <Popover
                            id='mouse-over-popover'
                            className={classes.popover}
                            classes={{
                                paper: classes.paper,
                            }}
                            open={open}
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            onClose={this.handlePopoverClose}
                            disableRestoreFocus
                        >
                            <Typography >Jill of all trades, Bachelor of one, Master of one...</Typography>
                        </Popover>
                    </div>
                    <div className={classes.heroContent} align='center'>
                        <Typography color='inherit' component='h1' variant='h2' align='center' gutterBottom>
                            Šeila Bećirović                            
                        </Typography>                        
                        <Typography variant='h7' align='center' color='inherit' paragraph>
                        Teaching Assistant at Faculty of Electrical Engineering, University of Sarajevo and Full Stack Engineer at Info Studio d.o.o. with a masters degree in Computer Science and Informatics. Also, a proud nerd culture enthusiast.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Link href='https://github.com/seilabecirovic' className={classes.link}>
                                <Icon path={mdiGithubCircle}
                                    size={3}
                                    color='#cbd0ec' />
                            </Link>
                            <Link href='https://linkedin.com/in/seilabecirovic' className={classes.link}>
                                <Icon path={mdiLinkedinBox}
                                    size={3}
                                    color='#cbd0ec' />
                            </Link>
                            <Link href='https://t.me/seilabecirovic' className={classes.link}>
                                <Icon path={mdiTelegram}
                                    size={3}
                                    color='#cbd0ec' />
                            </Link>                            
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
                        </div>
                    </div>
                </div>
                </Fade>
            </React.Fragment>
        );

    }

}
About.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(About);
