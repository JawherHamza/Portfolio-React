import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { Container } from '@material-ui/core';
import { FormattedMessage, useIntl } from 'react-intl';
import LinkIcon from '@material-ui/icons/Link';
import messagesfr from '../messages/fr.json'
import messagesen from '../messages/en.json'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,

    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    title: {
        color: 'rgb(255, 170, 0)',
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

export default function SingleLineGridList() {
    const classes = useStyles();
    let tileData = (useIntl().locale == "en")
        ? Object.values(messagesen.tileData)
        : Object.values(messagesfr.tileData);
    return (
        <Container id="projects" >
            <h1 class="title" >
                <FormattedMessage id="projects-title" />
            </h1>
            <div className={classes.root}>
                <GridList className={classes.gridList} cols={3.2} cellHeight="280" spacing={8}>
                    {tileData.map(tile => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                                actionIcon={
                                    (tile.link) && <IconButton aria-label={`star ${tile.title}`} href={tile.link} >
                                        <LinkIcon className={classes.title} />
                                    </IconButton>
                                }
                                subtitle={tile.desc}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </Container >
    );
}