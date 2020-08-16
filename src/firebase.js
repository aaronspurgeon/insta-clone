import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAVjn2dYaA-hUXLadPQPLDSqCrFXK8HEOc",
  projectId: "insta-clone-1429d",
  databaseURL: "https://insta-clone-1429d.firebaseio.com",
  authDomain: "insta-clone-1429d.firebaseapp.com",
  // OPTIONAL
  storageBucket: "insta-clone-1429d.appspot.com",
  messagingSenderId: "815215463627",
});

const db = firebase.firestore();

export { db };
