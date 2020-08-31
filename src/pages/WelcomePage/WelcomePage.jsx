import React from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import UsersTable from "components/UsersTable/UsersTable";
import { Tabs, Tab} from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import SecondPage from "pages/SecondPage/SecondPage";
import Drawer from "components/Drawer/Drawer";



const useStyles = makeStyles((theme) => ({
  gridContainerStyles: {
    "padding-top": "30px",
  },
  separatorStyles: {
    height: "20px",
  },
  paper_spacing: {
    padding: theme.spacing(2),
    
  },
  drawer: {
    width: "180px"
  }
}));

function WelcomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer/>
      <Paper className={classes.paper_spacing}>
        <UsersTable />
      </Paper>
    </div>
  );
}

export default WelcomePage;
