import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import './App.css';

import Particles from 'react-particles-js';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import View from './components/view';
import * as Actions from './store/actions'
import Homepage from './components/homepage';
import {connect} from 'react-redux';
import store from './store';



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

  render(){

  return (
    
    <ThemeProvider theme={theme}>
    <Particles 
                className='Particles'
                params={particlesOptions}
                style={{
                  background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,9,110,0.7234244039412641) 0%, rgba(0,212,255,1) 100%)',
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
              <Route exact path='/home' component={Homepage} />
              <Route exact path='/view/:id' render={(props) => <View store={store} {...props} /> } />
              <Route path='/' component={SignIn} />
              </Switch>
   
    </div>
    </Router>
    </ThemeProvider>
  );
}
}


export default App;
