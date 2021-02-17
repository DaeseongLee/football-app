import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCHX2D_epRCi3_9Z7Hc66ghGb1Es2oDqGk",
    authDomain: "react-football-5b51f.firebaseapp.com",
    projectId: "react-football-5b51f",
    databaseURL: "https://react-football-5b51f-default-rtdb.firebaseio.com/",
    storageBucket: "react-football-5b51f.appspot.com",
    messagingSenderId: "749041974047",
    appId: "1:749041974047:web:bc572ef4ef18e781608e2a",
    measurementId: "G-JDE4TQVT0K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;