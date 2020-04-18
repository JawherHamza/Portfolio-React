import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: "inline",
    },
}));

export default function AlignItemsList({ skill }) {
    const classes = useStyles();
    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start" className="skill-item">
                <ListItemAvatar>
                    <LazyLoadImage
                        effect="blur"
                        width="30px"
                        height="30px"
                        style={{ objectFit: "cover" }}
                        src={skill.picture}
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={skill.skill}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                <span className="sub-item-skill">{skill.sub && skill.sub}</span>
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );
}
