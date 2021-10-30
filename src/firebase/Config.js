import firebase from "firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO3NFO0SvVavYooC7JlOczKgu_CVgZ2zE",
  authDomain: "react-users-app-1750d.firebaseapp.com",
  projectId: "react-users-app-1750d",
  storageBucket: "react-users-app-1750d.appspot.com",
  messagingSenderId: "662596723694",
  appId: "1:662596723694:web:b43d7fe65e13dd5159e4ff",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;