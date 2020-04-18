import React from "react";
import { FormattedDate, FormattedMessage } from "react-intl";
import "../styles/Intro.css";
import {
    Grid,
    Paper,
    Typography,
    CardMedia,
    CardActionArea,
    Card,
    CardContent,
    CardActions,
    Button,
    makeStyles,
    ButtonGroup,
    IconButton,
    Fade,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EmailIcon from "@material-ui/icons/Email";
import useDarkMode from "use-dark-mode";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const useStyles = makeStyles({
    media: {
        height: "400px",
    },
});

export default function Intro() {
    const darkMode = useDarkMode(false);
    const classes = useStyles();
    let myPic = darkMode.value ? "./jawherhamzadark.jpg" : "./jawherhamza.jpg";
    return (
        <div className="intro">
            <Grid container spacing={6} className="intro-body">
                <Grid item xs={12} sm={7} md={8} lg={9} xl={10}>
                    <div className="text-intro">
                        <h1>
                            <FormattedMessage id="hi" />
                            <br />
                            <span>
                                <FormattedMessage id="name" />
                            </span>
                        </h1>
                        <h2 style={{ fontWeight: 500 }}>
                            <FormattedMessage id="intro" />
                        </h2>
                        <div className="dash"></div>
                        <br />
                        <Button
                            onClick={() => {
                                window.open("https://www.linkedin.com/in/jawher-hamza/");
                            }}
                        >
                            <IconButton aria-label="upload picture" component="span">
                                <LinkedInIcon />
                            </IconButton>
                        </Button>
                        <Button
                            onClick={() => {
                                window.open("https://github.com/JawherHamza");
                            }}
                        >
                            <IconButton aria-label="upload picture" component="span">
                                <GitHubIcon />
                            </IconButton>
                        </Button>
                        <Button
                            onClick={() => {
                                window.open("https://www.facebook.com/jawhar.hamza");
                            }}
                        >
                            <IconButton aria-label="upload picture" component="span">
                                <FacebookIcon />
                            </IconButton>
                        </Button>
                        <Button href="mailto:jawher_hamza@yahoo.fr">
                            <IconButton aria-label="upload picture" component="span">
                                <EmailIcon />
                            </IconButton>
                        </Button>
                    </div>
                    <br />
                    <br />
                    <Button variant="outlined" href="#cursus" className="show-more">
                        <FormattedMessage id="show-more" />
                        <ExpandMoreIcon />
                    </Button>
                </Grid>
                <Grid item sm={5} md={4} lg={3} xl={2}>
                    <Fade in={true} timeout={{ enter: 2000, exit: 3000 }}>
                        <Paper>
                            <Card className="card-intro">
                                <CardActionArea>
                                    <CardMedia className={classes.media}>
                                        <LazyLoadImage
                                            effect="blur"
                                            height="100%"
                                            width="100%"
                                            style={{ objectFit: "cover" }}
                                            src={myPic}
                                            alt="Jawher Hamza"
                                        />
                                    </CardMedia>
                                    <CardContent wrap="nowrap">
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                            wrap="nowrap"
                                        >
                                            <span className="card-text">
                                                <strong>
                                                    <FormattedMessage id="firstname" />
                                                </strong>
                                                : <bold>Jawher</bold>
                                                <br></br>
                                                <strong>
                                                    <FormattedMessage id="lastname" />
                                                </strong>
                                                : <bold>Hamza</bold>
                                                <br></br>
                                                <strong>E-mail</strong> :{" "}
                                                <a href="mailto:jawher_hamza@yahoo.fr">
                                                    jawher_hamza@yahoo.fr
                                                </a>
                                                <br></br>
                                                <strong>
                                                    <FormattedMessage id="birthday" />
                                                </strong>
                                                :
                                                <FormattedDate
                                                    value={new Date("10/04/1997")}
                                                ></FormattedDate>
                                                <br></br>
                                                <strong>Status</strong> :
                                                <FormattedMessage id="status" />
                                                <br></br>
                                            </span>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <ButtonGroup
                                        orientation="vertical"
                                        variant="text"
                                        aria-label="text primary button group"
                                        style={{ width: "100%" }}
                                    >
                                        <Button size="small" startIcon={<SaveIcon />}>
                                            <a href="CV - FR.pdf">
                                                <FormattedMessage id="download-cv-french"></FormattedMessage>
                                            </a>
                                        </Button>
                                        <Button size="small" startIcon={<SaveIcon />}>
                                            <a href="CV - EN.pdf">
                                                <FormattedMessage id="download-cv-english"></FormattedMessage>
                                            </a>
                                        </Button>
                                    </ButtonGroup>
                                </CardActions>
                            </Card>
                        </Paper>
                    </Fade>
                </Grid>
            </Grid>
        </div>
    );
}
