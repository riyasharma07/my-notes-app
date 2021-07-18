import firebase from 'firebase'
 var firebaseConfig = {
    apiKey: "AIzaSyCM09w1D-79HDc2xrflN9gd9QSbZ28UCNE",
    authDomain: "mynotes-df46b.firebaseapp.com",
    databaseURL: "https://mynotes-df46b-default-rtdb.firebaseio.com",
    projectId: "mynotes-df46b",
    storageBucket: "mynotes-df46b.appspot.com",
    messagingSenderId: "374479734844",
    appId: "1:374479734844:web:52c955fa5e12faa8931b39"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();