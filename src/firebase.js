import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCnYrv2lQhboRrnbsCgUQuDaGbVFWgHocY",
    authDomain: "simple-messanger414.firebaseapp.com",
    projectId: "simple-messanger414",
    storageBucket: "simple-messanger414.appspot.com",
    messagingSenderId: "976651170383",
    appId: "1:976651170383:web:dd0424880219d7d7e4303a",
    measurementId: "G-WZC0P9CRZY"
  };
 
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth, db };