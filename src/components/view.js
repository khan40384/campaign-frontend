import React, {useEffect, useState} from 'react';
import { FirebaseDatabaseProvider , FirebaseDatabaseNode } from "@react-firebase/database";
import * as Actions from '../store/actions';
import {useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Navigation from './navigation';
import store from '../store';
import firebase from 'firebase';
import fire from './fire';
import Slider from './slider';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  gridList: {
    minHeight: theme.spacing(100),
  },
  slider: {
    display: 'flex',
    justifyContent: 'center',
  },
}));


export default function CenteredGrid() {
  const classes = useStyles();
  const dispatch = useDispatch();
  

  return (
    <div className={classes.root}>

      <Grid container  spacing={5}>
      <Grid item xs={12} >
        <Navigation />
        </Grid>
        <Grid item xs={7} className={classes.slider}>
        
        </Grid>
        <Grid item xs={5} className={classes.slider}>
         <Slider/>
        </Grid>
      </Grid>
    </div>
  );
}