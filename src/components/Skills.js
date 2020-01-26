import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import messagesfr from "../messages/fr.json";
import messagesen from "../messages/en.json";
import SkillList from "./SkillList";
import { Grid, Container } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    minHeight: "300px"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  },
  skills: {
    padding: "1px 0px 40px 0",
    margin: "30px 0px",
    backgroundColor: "#eeeeee"
  }
}));

export default function VerticalTabs({ translationfile }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  console.log(translationfile);
  let skills =
    useIntl().locale == "en"
      ? Object.values(messagesen.skills)
      : Object.values(messagesfr.skills);

  return (
    <div className={classes.skills} id="skills">
      <Container>
        <h1 class="title">
          <FormattedMessage id="skills-title" />
        </h1>
        <div className={classes.root + " skills-tab"}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            {skills.map((dom, i) => {
              return <Tab label={dom.skillTitle} {...a11yProps(i)} />;
            })}
          </Tabs>

          {skills.map((dom, i) => {
            return (
              <TabPanel value={value} index={i} style={{ width: "100%" }}>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="stretch"
                >
                  {dom.list.map(skill => {
                    return (
                      <Grid item>
                        <SkillList skill={skill} />
                      </Grid>
                    );
                  })}
                </Grid>
              </TabPanel>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
