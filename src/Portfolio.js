import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
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
    cardContent: {
        flexGrow: 1,
        height: '90%'
    },
    chip: {
        margin: theme.spacing.unit,
        backgroundColor: '#3f51b5',
        color: 'white'

    },
    content: {
        padding: '2%',
        height: '30%',
        margin: '1%',
    },
    contentDescription: {
        height: '50%',
        padding: '2%'
    },
    contentChip: {
        padding: '2%',
        height: '10%',
        marginBottom: '3%',
    }
});


class Portfolio extends Component {

    projects = [{
        Name: 'NerdHerd',
        Description: 'Nerd Herd website offers you latest news and reviews from the world of music, books, movies, games and TV shows.',
        Link: 'https://github.com/seilabecirovic/NerdHerd',
        Languages: ['PHP', 'HTML', 'CSS', 'JS'],
    },
    {
        Name: 'BrickBreaker',
        Description: 'Repository for faculty project on course Embedded Systems generation 2015/2016 @ Faculty of Electrical Engineering Sarajevo',
        Link: 'https://github.com/seilabecirovic/BrickBreaker',
        Languages: ['C++'],
    },
    {
        Name: 'DP Face Recognition',
        Description: 'Face recognition of doppelgangers using Python, OpenCV and CascadeClassifier',
        Link: 'https://github.com/seilabecirovic/Doppelgangers-Face-Recognition',
        Languages: ['Python'],
    },
    {
        Name: 'Meminator',
        Description: 'Repository for faculty project on course Advance Web Technologies generation 2017/2018 @ Faculty of Electrical Engineering Sarajevo',
        Link: 'https://github.com/acimovicAlek/NWT_2018',
        Languages: ['JAVA', 'Spring Boot', 'ReactJS'],
    },
    {
        Name: 'BP Project',
        Description: 'Repository for faculty project on course Databases generation 2017/2018 @ Faculty of Electrical Engineering Sarajevo',
        Link: 'https://github.com/dzirloT/BP-Projekat-2017',
        Languages: ['JAVA', 'Spring Boot', 'AngularJS'],
    },
    {
        Name: 'Lago',
        Description: 'Repository for faculty project on course Practicum in Business Information Systems generation 2017/2018 @ Faculty of Electrical Engineering Sarajevo',
        Link: 'https://github.com/acimovicAlek/NWT_2018',
        Languages: ['JAVA', 'Spring Boot', 'ReactJS'],
    }

    ];

    render() {
        const projects = this.projects;
        const { classes } = this.props;
        return (
            <React.Fragment >
                <div className={classNames(classes.layout, classes.cardGrid)}>
                    <Grid container spacing={40}>
                        {projects.map(card => (
                            <Grid item key={card} sm={10} md={6} lg={4}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <div className={classes.content} align='center'>
                                            <Typography variant='h5' component='h2'>
                                                <Link size='huge' href={card.Link}>{card.Name}</Link>
                                            </Typography>
                                        </div>
                                        <div className={classes.contentDescription} align='center' >
                                            <Typography component='h2'>
                                                {card.Description}
                                            </Typography>
                                        </div>
                                        <div className={classes.contentChip} align='center' >
                                            <Typography component='h3'>
                                                {card.Languages.map(lang => (
                                                    <Chip label={lang} className={classes.chip} />
                                                ))}
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </React.Fragment >
        );
    }
}
Portfolio.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Portfolio);
