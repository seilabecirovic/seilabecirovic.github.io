import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Icon from '@mdi/react';
import Link from '@material-ui/core/Link';
import { mdiGmail, mdiGithubBox, mdiTelegram, mdiLinkedinBox, mdiGithubCircle, } from '@mdi/js';
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
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <React.Fragment>
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
                            <Typography >Jill of all trades, Bachelor of one, Master of none (yet)...</Typography>
                        </Popover>
                    </div>
                    <div className={classes.heroContent} align='center'>
                        <Typography color='inherit' component='h1' variant='h2' align='center' gutterBottom>
                            Šeila Bećirović
                        </Typography>
                        <Typography variant='h7' align='center' color='inherit' paragraph>
                            Graduate teaching assistant and graduate student at Faculty of Electrical Engineering University
                            of Sarajevo with a bachelor degree in Computer Science and Informatics. Also a proud nerd culture enthusiast.
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
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );

    }

}
About.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(About);
