// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7UX-ftMiIV1O0q8Y9HdTa7W59tRihRvA",
  authDomain: "afkre-movie.firebaseapp.com",
  projectId: "afkre-movie",
  storageBucket: "afkre-movie.appspot.com",
  messagingSenderId: "544213051155",
  appId: "1:544213051155:web:be3eda6bdf55602a58dce6",
  measurementId: "G-TGV4BQ57RM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAuto(app);

export const auth= getAuth(app)