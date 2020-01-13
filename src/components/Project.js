import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles({
    card: {
        width: '100%',
    },
    media: {
        height: 140,
    },
});

export default function MediaCard({ project }) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={project.picture}
                    title={project.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {project.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {project.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <FormattedMessage id="visit" />
                </Button>
                <Button size="small" color="primary">
                    <FormattedMessage id="used-tech" />
                </Button>
            </CardActions>
        </Card>
    );
}