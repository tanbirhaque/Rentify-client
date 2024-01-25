// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7o15UOYuOcgntZfZq3TK6LewcmNJm_hE",
  authDomain: "rentify-70183.firebaseapp.com",
  projectId: "rentify-70183",
  storageBucket: "rentify-70183.appspot.com",
  messagingSenderId: "926892898771",
  appId: "1:926892898771:web:561e7b7805bc51087b1726",
  measurementId: "G-JX3LHMM58H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app