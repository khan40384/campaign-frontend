import React from 'react';
import {useDispatch} from 'react-redux';
import $ from 'jquery';
import * as Actions from '../store/actions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
   
    const email = document.getElementById('email').value;
    const password1 = document.getElementById('password').value;
    console.log(email);
    console.log(password1);
    if(email.length && password1.length){
        fetch('https://smct-server.herokuapp.com/users/login', {
          method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: password1,
          email: email
        })
      })
        .then(response => {
          console.log(response.status);
            if(response.status != 200){
          response.json()
          .then(response => {
              ocShowAlert(response.error, 'red');
            })
          .catch(err => {
            console.log(err);
             ocShowAlert(err, 'red');
          })
          }
            else{
              response.json()
              .then(response => {
                console.log(response);
                console.log(response.obj.data);
                dispatch(Actions.signIn(response.obj.data));
                 window.location.href='./home';
              })
              .catch(err=> {
                console.og(err);
                ocShowAlert(err, 'red');
              })
            }
          })
          .catch(err => {
            console.log(err);
            ocShowAlert(err, 'red');
          })
    }
    else{
      ocShowAlert('please provide all details', 'orange');
    }
  }

  const ocShowAlert = ( message, background = '#3089cf' ) => {
    let alertContainer = document.querySelector( '#oc-alert-container' ),
      alertEl = document.createElement( 'div' ),
      textNode = document.createTextNode( message );
    alertEl.setAttribute( 'class', 'oc-alert-pop-up' );
    $( alertEl ).css( 'background', background );
    alertEl.appendChild( textNode );
    alertContainer.appendChild( alertEl );
    setTimeout( function () {
      $( alertEl ).fadeOut( 'slow' );
      $( alertEl ).remove();
    }, 3000 );
  };


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div id="oc-alert-container" style={{margin: '15px'}}></div>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="./signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}