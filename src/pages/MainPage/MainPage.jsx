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

import WelcomePage from "pages/WelcomePage/WelcomePage";
import SecondPage from "pages/SecondPage/SecondPage";


const drawerWidth = 120;



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh"
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
    backgroundColor: 'white'
  },
}));

const MainPage = props => {
  const{match, history} = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    0: "page1",
    1: "page2"
  };

  const indexToTabName = {
    page1: 0,
    page2: 1
  };

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/${tabNameToIndex[newValue]}`);
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
      {selectedTab === 0 && <WelcomePage />}
      {selectedTab === 1 && <SecondPage />}
    </div>
  );
}

export default MainPage;