import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import './App.css';

import Particles from 'react-particles-js';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import * as Actions from './store/actions'
import Homepage from './components/homepage';
import SignInOption from './components/signInOption';
import View from './components/view';
import {connect} from 'react-redux';
import store from './store';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import fire from './components/fire'

console.log(firebase.auth().currentUser);
console.log(firebase.auth.GoogleAuthProvider);


const particlesOptions={
  particles:{
    number:{    
      value:100,
      density:{
        enable:true,
        value_area:400
      }

    },
    height: '100%',
  },
}

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: 'rgb(0,0,0)',
      light: 'rgb(105,105,105)',
      
    },
    secondary: {
      main: 'rgb(0,0,0)',
    },
    textColor: {
      // This is green.A700 as hex.
      main: 'white',

    },
  },
});

class App extends React.Component {

  
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
          
      
    firebase.auth().onAuthStateChanged(user => {
      const { dispatch } = this.props;                
      if(!!user){
        dispatch(Actions.signIn(user));
        
    }
      else{
        dispatch(Actions.signOut());
      }
      console.log("user", user.displayName);
      console.log(this.props.isSignedIn);
    
  })
  }




  render(){

    const gradient = this.props.gradient;
    console.log(gradient);
  return (
    
    <ThemeProvider theme={theme}>
    <Particles 
                className='Particles'
                params={particlesOptions}
                style={{
                  background: `${gradient}`,
                  width: '100%',
                  height: '100%', 
                  position: 'fixed',
                  backgroundSize: 'cover',
                  backgroundPosition: '50% 50%',
                  backgroundRepeat: 'no-repeat'
                }}
                 />
    <Router>
    <div className="App" style={{height: '100%'}}>
                <Switch>
              <Route exact path='/signup' component={SignUp} />
              <Route exact path='/signin' component={SignIn} />
              <Route exact path='/home' component={Homepage} />
              <Route exact path='/view/:id' render={(props) => <View store={store} {...props} /> } />
              <Route path='/' component={SignInOption} />
              </Switch>
              
          

                

    </div>
    </Router>
    </ThemeProvider>
  );
}
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isSignedIn : state.auth.isSignedIn,
    gradient: state.matches.gradient
  }
}

export default connect(mapStateToProps)(App);
