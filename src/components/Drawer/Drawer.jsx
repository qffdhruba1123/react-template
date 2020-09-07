import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 180,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 180,
    backgroundColor: "grey",
  },
  toolbar: theme.mixins.toolbar,
}));

const Drawer = (props) => {
  const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: "Home",
      onClick: () => history.push("/"),
    },
    {
      text: "Second Page",
      onClick: () => history.push("/page2"),
    },
  ];
  return (
    <MUIDrawer
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List>
        {itemsList.map((item) => {
          const { text, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);
