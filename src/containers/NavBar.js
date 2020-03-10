import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import { Slide, IconButton, Menu, MenuItem, Hidden } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import Intro from "../components/Intro";
import Cursus from "../components/Cursus";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Passions from "../components/Passions";
import Contact from "../components/Contact";
import "../styles/NavBar.css";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function NavBar({ setLanguage }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <span className="navbar-brand">
                <span>
                  <i id="dash" class="fa fa-code" /> Jawher Hamza{" "}
                  <i id="dash2" class="fa fa-code" />.
                </span>
              </span>
            </Typography>
            <Hidden smDown>
              <div className="nav-links">
                <a href="#cursus">
                  <FormattedMessage id="cursus-title" />
                </a>
                &nbsp;|&nbsp;
                <a href="#skills">
                  <FormattedMessage id="skills-title" />
                </a>
                &nbsp;|&nbsp;
                <a href="#projects">
                  <FormattedMessage id="projects-title" />
                </a>
                &nbsp;|&nbsp;
                <a href="#passions">
                  <FormattedMessage id="passion-title" />
                </a>
                &nbsp;|&nbsp;
                <a href="#contact">Contact</a>&nbsp;&nbsp;
              </div>
            </Hidden>
            <IconButton
              style={{ float: "right",color:''#ebc000' }}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              className="intl-button"
              onClick={event => {
                setAnchorEl(event.currentTarget);
              }}
            >
              <LanguageIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={() => {
                setAnchorEl(null);
              }}
            >
              <MenuItem
                onClick={() => {
                  setLanguage("en");
                }}
              >
                English
                <img
                  alt="en"
                  src="https://cometrip.sn/_nuxt/img/e53dbca.png"
                  className="language-ico"
                ></img>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setLanguage("fr");
                }}
              >
                Français
                <img
                  alt="fr"
                  src="https://cometrip.sn/_nuxt/img/d892704.png"
                  className="language-ico"
                ></img>
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <Intro />
      <Cursus />
      <Skills />
      <Projects />
      <Passions />
      <Contact />
      <Footer />
      <ScrollTop>
        <Fab
          size="small"
          aria-label="Scroll Back To Top"
          style={{ zIndex: "99999" }}
        >
          <KeyboardArrowUpIcon style={{ zIndex: "99999" }} />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};
