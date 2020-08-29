import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "180px"
  }
});

const Drawer = props => {
  const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: "Home",
      onClick: () => history.push("/")
    },
    {
      text: "Second Page",
      onClick: () => history.push("/page2")
    }
  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List>
        {itemsList.map((item, index) => {
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
