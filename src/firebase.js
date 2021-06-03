import firebase from "firebase/app";
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMGytCl8tKD2UNyBt349JBydF3GWY4jI0",
  authDomain: "arsenal-dd6b3.firebaseapp.com",
  projectId: "arsenal-dd6b3",
  storageBucket: "arsenal-dd6b3.appspot.com",
  messagingSenderId: "972506468109",
  appId: "1:972506468109:web:b9e0bbdc050ae0b0ff6a44",
  measurementId: "G-HP0314FH77"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {
  firebase
}