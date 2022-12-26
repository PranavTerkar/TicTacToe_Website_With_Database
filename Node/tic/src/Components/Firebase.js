// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUO2huHz_8aeYn2ZL6vPb9utluEulvpx0",
  authDomain: "tictactoe-e4cee.firebaseapp.com",
  projectId: "tictactoe-e4cee",
  storageBucket: "tictactoe-e4cee.appspot.com",
  messagingSenderId: "686476732021",
  appId: "1:686476732021:web:540fd8d44108c852b83a3c",
  measurementId: "G-SVFCNZR092"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };