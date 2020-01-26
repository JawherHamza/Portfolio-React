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
import useDarkMode from "use-dark-mode";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const useStyles = makeStyles({
  media: {
    height: "400px"
  }
});

export default function Intro() {
  const darkMode = useDarkMode(false);
  const classes = useStyles();
  let myPic = darkMode.value
    ? "https://lh3.googleusercontent.com/GJwUGMHOUhDX-Pj2glWAXS7vU85RGZassTwd-x7tkcr3zcxnTU6QdfI13b5s7wRl-7bgEl2M0la1APxNiiUCBE_i7WZ-yJx7cbdwp5-4p_cC-dU0Z4JffP_GhtFqHifP7puK86hAYGTK3vpCKYWWIYXFO9-FFhXBCeinifN7qhSBBM6_QCMi9G1lZU73JYB76LdM4pFDYWrb75JEpX1UBCoEBt4LYBXF7qIwHNda20wWFeEVJWAig3GEi6lqawf-u30g_Qnp1VZLgvsHOvCDIC3oQ85KXN8faLrCQr2kXFXqlz6XDa7ag9RLvd4DkHgl1CJOo7F9rl-UAT3G2PGXS5ew1ZOU1aGJ88eHS21tehMqTD9lTGOPMhGqxdobAcMaSk6ylsWsywh9lcqTb1WrdmjCtflTHW0bOG8DAxFOsjRmuOWVDbrwHQCv3-A5BMmlFMIYaCraPEum33qkL5UhQjwcbDNX2pApkWONlud6Xo61110WbpLJ4NQCr9D8h7dE3cAkx0MVphb9Y-Y33CCwyXLpMUysY2wyF861jF-8Hf6N6pgc-vd0Hm6SdRqfvrIJlsKiRxQVOrqkIu1m0TBsfD9rQn_7lv_kKoEa9o1Fvtc0lq6U3fSvBJ10hZiak1ykXgm-FAH5Vbqau3JTfTMyYp_YLeYmPTnSHKNOE2otJvEdxeXlQaMpCW8=w391-h625-no"
    : "./jawherhamza.jpg";
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
        <Grid item style={{ width: "297px", margin: "0 auto" }}>
          <Fade in={true} timeout={{ enter: 2000, exit: 3000 }}>
            <Paper>
              <Card className="card-intro">
                <CardActionArea>
                  <CardMedia className={classes.media}>
                    <LazyLoadImage
                      effect="blur"
                      height="100%"
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
