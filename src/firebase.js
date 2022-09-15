import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
//vac-coop-mikez firebase app
const firebaseConfig = {
  apiKey: "AIzaSyBVm14jaHgYmTANbnsoCoh2wHabh5GSKv0",
  authDomain: "vac-coop-mikez.firebaseapp.com",
  projectId: "vac-coop-mikez",
  storageBucket: "vac-coop-mikez.appspot.com",
  messagingSenderId: "881260355801",
  appId: "1:881260355801:web:b27673b6d9995ec5fb9ec8",
};

// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use for db
const db = firebaseapp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, googleProvider };


