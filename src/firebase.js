// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBghqItCJKwkjTHN13ilfA66Ajgj6L2JFY",
  authDomain: "olle-mors.firebaseapp.com",
  projectId: "olle-mors",
  storageBucket: "olle-mors.appspot.com",
  messagingSenderId: "189612317827",
  appId: "1:189612317827:web:322bab842c8a06f47c8fb6",
  measurementId: "G-SB7SDVXFGG"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;