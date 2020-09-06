import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Route, Switch } from "react-router-dom";
import SecondPage from "pages/SecondPage/SecondPage";
import Drawer from "components/Drawer/Drawer";
import MainPage from "pages/MainPage/MainPage";
import { Provider } from "react-redux";

import store from "store/store";

const drawerWidth = 120;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    zIndex: theme.zIndex.drawer + 1,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(0),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer />
        <Switch>
          <Route exact from="/" render={(props) => <MainPage {...props} />} />
          <Route
            exact
            path="/page2"
            render={(props) => <SecondPage {...props} />}
          />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
