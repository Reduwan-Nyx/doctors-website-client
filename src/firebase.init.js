// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDncxOYB5MW8YIUcrtdNj50BxAHBuZ8McU",
  authDomain: "doctors-portal-6944c.firebaseapp.com",
  projectId: "doctors-portal-6944c",
  storageBucket: "doctors-portal-6944c.appspot.com",
  messagingSenderId: "54696546630",
  appId: "1:54696546630:web:ab49d30934340e329ad547"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;