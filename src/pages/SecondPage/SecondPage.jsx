import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import UsersTable from 'components/UsersTable/UsersTable';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  user: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }
}));

export default function SecondPage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
        <Card elevation={10}>
            <CardContent>
                <Typography variant="h6">details</Typography>
                <Typography variant="body1">
                    This is a sample for grid layout. Here 5 grids are being used.
                </Typography>
               
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={4}>
        <Card elevation={10}>
            <CardContent>
                <Typography variant="h6">details</Typography>
                <Typography variant="body1">
                    This is a sample for grid layout. Here 5 grids are being used.
                </Typography>
               
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={4}>
        <Card elevation={10}>
            <CardContent>
                <Typography variant="h6">details</Typography>
                <Typography variant="body1">
                    This is a sample for grid layout. Here 5 grids are being used.
                </Typography>
               
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={12}>
          <UsersTable/>
        </Grid>
      </Grid>
    </div>
  );
}