// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyDicrywMYPCrmpqV4XcCn5DYK58Oo8iAxU",
    authDomain: "twitter-clone-e531d.firebaseapp.com",
    databaseURL: "https://twitter-clone-e531d.firebaseio.com",
    projectId: "twitter-clone-e531d",
    storageBucket: "twitter-clone-e531d.appspot.com",
    messagingSenderId: "108698192121",
    appId: "1:108698192121:web:12f71ded544691667cfa28",
    measurementId: "G-1P4B8KP2FR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

  export default db;