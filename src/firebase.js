import { DEFAULT_EXTENSIONS } from "@babel/core";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDOY4BHkXb3xgsNCr2YD9IeesjY2GPbdqg",
  authDomain: "netflix-clone-69e9b.firebaseapp.com",
  projectId: "netflix-clone-69e9b",
  storageBucket: "netflix-clone-69e9b.appspot.com",
  messagingSenderId: "714490304074",
  appId: "1:714490304074:web:d48234f7e1fcae62ec38b3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };
export default db;
