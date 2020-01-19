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
  Fade
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles({
  card: {
    height: "100%",
    textAlign: "left"
  },
  media: {
    height: "400px"
  }
});

export default function Intro() {
  const classes = useStyles();
  return (
    <div className="intro">
      <Grid container spacing={6} className="intro-body">
        <Grid item xs={12} sm={12} md={8} lg={9}>
          <div className="text-intro">
            <h1>
              <FormattedMessage id="hi" />
              <br />
              <span style={{ color: "#525252" }}>
                <FormattedMessage id="name" />
              </span>
            </h1>
            <h2 style={{ fontWeight: 100 }}>
              <FormattedMessage id="intro" />
            </h2>
            <div className="dash"></div>
            <br />
            <Button href="https://www.linkedin.com/in/jawher-hamza/">
              <IconButton aria-label="upload picture" component="span">
                <LinkedInIcon />
              </IconButton>
            </Button>
            <Button href="https://github.com/JawherHamza">
              <IconButton aria-label="upload picture" component="span">
                <GitHubIcon />
              </IconButton>
            </Button>
            <Button href="https://www.facebook.com/jawhar.hamza">
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
        <Grid item style={{ width: "300px", margin: "0 auto" }}>
          <Fade in={true} timeout={{ enter: 2000, exit: 3000 }}>
            <Paper>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="./jawherhamza.jpg"
                    title="Jawher Hamza"
                  />
                  <CardContent wrap="nowrap">
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      wrap="nowrap"
                    >
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
