import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import { Slide, IconButton, Menu, MenuItem } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import Intro from "./Intro";
import Cursus from "./Cursus";
import "../styles/NavBar.css";

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
                <i id="dash" class="fa fa-code" /> Jawher Hamza
                <i id="dash2" class="fa fa-code" />
              </span>
            </Typography>
            <IconButton
              style={{ float: "right" }}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={event => {
                setAnchorEl(event.currentTarget);
              }}
              color="inherit"
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
                English{" "}
                <img
                  src="https://cometrip.sn/_nuxt/img/e53dbca.png"
                  className="language-ico"
                ></img>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setLanguage("fr");
                }}
              >
                Français{" "}
                <img
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
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="Scroll Back To Top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};
