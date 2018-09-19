import * as firebase from 'firebase';
let config = {
    apiKey: "AIzaSyAw50Ghd8xxNKK-vtfJ9DFqXmt5S2AmVBc",
    authDomain: "squarecandy-c571f.firebaseapp.com",
    databaseURL: "https://squarecandy-c571f.firebaseio.com",
    projectId: "squarecandy-c571f",
    storageBucket: "squarecandy-c571f.appspot.com",
    messagingSenderId: "251295533263"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const storage = firebase.storate().ref();