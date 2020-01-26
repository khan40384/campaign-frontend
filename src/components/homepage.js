import React, {useEffect, useState} from 'react';
import { FirebaseDatabaseProvider , FirebaseDatabaseNode } from "@react-firebase/database";
import * as Actions from '../store/actions';
import {useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Navigation from './navigation';
import FilterYear from './filterYear';
import GridList from './gridList';
import PrevNext from './prevNext';
import store from '../store';
import firebase from 'firebase';
import fire from './fire';
import Favourite from './favourite';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  nav: {
    width: '100%',
  },
  margin: {
    marginTop: theme.spacing(5),
    backgroundColor: theme.palette.primary.main,
  },
  gridList: {
    minHeight: theme.spacing(100),
  },
}));


export default function CenteredGrid() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(2)
  useEffect(() => {
    fire.database().ref().on("value", function(snapshot) {
      console.log(snapshot.val());
      dispatch(Actions.setMatchesData(snapshot.val()));
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
   }, []);

  return (
    <div className={classes.root}>

      <Grid container  spacing={5}>
      <Grid item xs={12} >
        <Navigation />
        </Grid>
        <Grid item xs={3} >
          <Fab
          variant="extended"
          size="medium"
          color="secondary"
          className={classes.margin}
        >
          <NavigationIcon />
          CHECK PREDICTION
        </Fab>
        <FilterYear className={classes.margin} />
        <Favourite className={classes.margin} />
        </Grid>
        <Grid item xs={9}>
        <Grid container className={classes.gridList} spacing={3}>
        <GridList  />
        </Grid>
          </Grid>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={9}>
          <Box display="flex" justifyContent="center" m={1} p={1} >
            <PrevNext />
          </Box>
          </Grid>
      </Grid>
    </div>
  );
}