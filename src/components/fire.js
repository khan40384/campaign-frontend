import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD2yd--_QaSIjmso9KjB99o8tbjKLjpaQQ",
  authDomain: "cricket-985a7.firebaseapp.com",
  databaseURL: "https://cricket-985a7.firebaseio.com",
  projectId: "cricket-985a7",
  storageBucket: "cricket-985a7.appspot.com",
  messagingSenderId: "317592845238",
  appId: "1:317592845238:web:fce103665522a3f03b5f17",
  measurementId: "G-EGQV57X7LZ"
};
var fire = firebase.initializeApp(firebaseConfig);


export default fire;