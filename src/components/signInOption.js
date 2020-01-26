import React from 'react';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Box from '@material-ui/core/Box';

export default function SignInOption() {
  const uiConfig = {
    signInSuccessUrl: 'https://cricket-985a7.firebaseapp.com/home',
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
  }

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height : '100%'}}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <StyledFirebaseAuth
                  uiConfig={uiConfig}
                  firebaseAuth={firebase.auth()}
                />
                </Box>
                </div>
  );
}
