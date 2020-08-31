import React from "react";
import { makeStyles } from "@material-ui/styles";
import UsersTable from "components/UsersTable/UsersTable";
import { Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridContainerStyles: {
    "padding-top": "30px",
  },
  separatorStyles: {
    height: "20px",
  },
  paper_spacing: {
    padding: theme.spacing(2),
    flexWrap: "wrap",
    display: "flex",
  },
  drawer: {
    width: "180px",
  },
  root: {
    flexGrow: 1,
  },
}));

function WelcomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
        <Toolbar/>
        <UsersTable />
      
    </div>
  );
}

export default WelcomePage;
