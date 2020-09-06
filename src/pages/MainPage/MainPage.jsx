import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Collapse from "@material-ui/core/Collapse";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import { Tab, Tabs } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Paper from "@material-ui/core/Paper";

import WelcomePage from "pages/WelcomePage/WelcomePage";
import SecondPage from "pages/SecondPage/SecondPage";
import { Provider } from "react-redux";

import store from "store/store";
const drawerWidth = 120;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
  },
  paper_spacing: {
    padding: theme.spacing(2),
    flexWrap: "wrap",
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    marginLeft: 120,
  },
  drawerContainer: {
    overflow: "auto",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    backgroundColor: "white",
  },
}));

const MainPage = (props) => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange1 = (newVal) => {
    setSelectedTab(newVal);
  };

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const clickMenu = () => {
    setOpen(!open);
  };

  return (
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <div className={classes.drawerContainer}>
            <List>
              <ListItem button onClick={clickMenu}>
                <ListItemText primary="Menu" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={selectedTab}
                  onChange={handleChange}
                  aria-label="Vertical tabs"
                  className={classes.tabs}
                >
                  <Tab label="Page 1" />
                  <Tab label="Page 2" />
                </Tabs>
              </Collapse>
            </List>
          </div>
        </Drawer>
        <main className={classes.content}>
          <Paper className={classes.paper_spacing}>
            {selectedTab === 0 && <WelcomePage />}
            {selectedTab === 1 && <SecondPage changeTab={handleChange1} />}
          </Paper>
        </main>
      </div>
  );
};

export default MainPage;
