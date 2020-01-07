import React from "react";
import { FormattedDate, FormattedMessage } from "react-intl";
import "../styles/Intro.css";
import {
  Grid,
  Paper,
  Container,
  Typography,
  CardMedia,
  CardActionArea,
  Card,
  CardContent,
  CardActions,
  Button,
  makeStyles,
  ButtonGroup,
  Fab,
  IconButton
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  card: {
    maxWidth: "100%",
    height: "100%",
    textAlign: "left"
  },
  media: {
    height: "300px"
  }
});

export default function Intro() {
  const classes = useStyles();
  return (
    <div className="intro">
      <Grid container spacing={6} className="intro-body">
        <Grid item xs={12} sm={7} md={8} lg={9}>
          <div className="text-intro">
            <h1>
              <FormattedMessage id="hi" />
              <br />
              <span style={{ color: "#9a3209" }}>
                <FormattedMessage id="name" />
              </span>
            </h1>
            <h2 style={{ fontWeight: 100 }}>
              <FormattedMessage id="intro" />
            </h2>
            <div className="dash"></div>
            <br />

            <IconButton aria-label="upload picture" component="span">
              <LinkedInIcon />
            </IconButton>
            <IconButton aria-label="upload picture" component="span">
              <GitHubIcon />
            </IconButton>
            <IconButton aria-label="upload picture" component="span">
              <FacebookIcon />
            </IconButton>
          </div>
          <br />
          <br />
          <Button variant="outlined" href="" className="show-more">
            <FormattedMessage id="show-more" />
            <ExpandMoreIcon />
          </Button>
        </Grid>
        <Grid item xs={12} sm={5} md={4} lg={3}>
          <Paper>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://scontent.ftun11-1.fna.fbcdn.net/v/t1.0-9/13590308_10207250769091536_6312603338957898940_n.jpg?_nc_cat=110&_nc_ohc=O59BZIc4IGkAQlEkK3-E8ZE9a9-nWC3Z8UUQssNHHP8BEihkop7gSwB1w&_nc_ht=scontent.ftun11-1.fna&oh=4a01be4227ea932034972b89f14bb9aa&oe=5E9AA34B"
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
                    <strong>E-mail</strong> : jawher_hamza@yahoo.fr<br></br>
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
        </Grid>
      </Grid>
    </div>
  );
}
