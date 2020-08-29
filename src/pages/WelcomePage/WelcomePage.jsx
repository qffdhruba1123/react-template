import React from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import UsersTable from "components/UsersTable/UsersTable";

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
}));

function WelcomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper_spacing}>
        <UsersTable />
      </Paper>
    </div>
  );
}

export default WelcomePage;
