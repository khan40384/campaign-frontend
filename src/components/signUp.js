import React from 'react';
import {useDispatch} from 'react-redux';
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
import $ from 'jquery';
import axios from 'axios';
import * as Actions from '../store/actions';

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

const delay = (ms) => new Promise(resolve =>
    setTimeout(resolve, ms)
  );

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const displayName = document.getElementById('displayName').value;
    const password1 = document.getElementById('password').value;
    const password2 = document.getElementById('passwordConfirm').value;
    console.log(email);
    console.log(password1);
    if(email.length && password1.length && password2.length && displayName.length){
      if(password1 != password2){
        ocShowAlert('passwords do not matches', 'red');
      }
      else if(password1.length <6){
        ocShowAlert('password must be of minimum length 6', 'yellow');
      }
      else{
        fetch('https://smct-server.herokuapp.com/users/register', {
          method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          displayName: displayName,
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
          Sign up
        </Typography>
        <div id="oc-alert-container" style={{margin: '15px'}}></div>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="displayName"
            label="DisplayName"
            name="displayName"
            autoComplete="displayName"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            validationerrors={{
                isEmail: 'Please enter a valid email'
            }}
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
            validations="equalsField:passwordConfirm"
            validationerrors={{
                equalsField: 'Passwords do not match'
            }}
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="password"
            name="passwordConfirm"
            label="Confirm Password"
            validations="equalsField:password"
            validationerrors={{
                equalsField: 'Passwords do not match'
            }}
            id="passwordConfirm"
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
            Submit
          </Button>
          <Grid container>
            <Grid item>
              <Link href="./login" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}