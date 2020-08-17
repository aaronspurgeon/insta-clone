import firebase from "firebase";

const firebaseApp = firebase.initializeApp({});

const db = firebase.firestore();

export { db };
