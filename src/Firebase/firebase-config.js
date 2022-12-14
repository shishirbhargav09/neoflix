// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYuBUZ56i3ltRBQRwTtdILkumQP4S8H4U",
  authDomain: "neoflix-c0046.firebaseapp.com",
  projectId: "neoflix-c0046",
  storageBucket: "neoflix-c0046.appspot.com",
  messagingSenderId: "902581642496",
  appId: "1:902581642496:web:f578449259c9a514987fe5",
  measurementId: "G-E7G9H73Y6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);