import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCpsURrFEHGHXz5ZK02Vdo5q4GdxXG0rzU",
    authDomain: "e-ride-app-acf68.firebaseapp.com",
    projectId: "e-ride-app-acf68",
    storageBucket: "e-ride-app-acf68.appspot.com",
    messagingSenderId: "582862722696",
    appId: "1:582862722696:web:b0d80556bc028a47c0313d"
  };
//
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
