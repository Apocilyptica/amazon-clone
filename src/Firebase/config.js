import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyA-uc4DYAaGfrlID14_L6lWPfYNGNQqQX4",
  authDomain: "e-clone-48409.firebaseapp.com",
  projectId: "e-clone-48409",
  storageBucket: "e-clone-48409.appspot.com",
  messagingSenderId: "581170418575",
  appId: "1:581170418575:web:8ed7c2755854db645bf1fa",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
