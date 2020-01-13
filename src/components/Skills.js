import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import messages from '../messages/fr.json'
import messagesen from '../messages/en.json'
import SkillList from './SkillList'
import { Grid, Container } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { useIntl } from 'react-intl';

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
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    minHeight: "300px"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,

  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const intl = useIntl()

  let skills = (intl.locale == "en")
    ? Object.entries(messagesen.skills)
    : Object.entries(messages.skills)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <h1 class="title" >
        <FormattedMessage id="skills-title" />
      </h1>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {skills.map((dom, i) => {
            console.log(dom)
            return <Tab label={dom[1].skillTitle} {...a11yProps(i)} />
          })}
        </Tabs>

        {skills.map((dom, i) => {
          return <TabPanel value={value} index={i} style={{ width: '100%' }} >
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="stretch"
            >
              {dom[1].list.map((skill) => {
                return (<Grid item >
                  <SkillList skill={skill} />
                </Grid>)
              })}
            </Grid>
          </TabPanel>
        })}
      </div >
    </Container >
  );
}