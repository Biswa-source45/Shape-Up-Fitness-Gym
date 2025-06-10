// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY2gCdqLM1pmZH1ynFtu8IvMS3dv9GQCA",
  authDomain: "shape-upfitness.firebaseapp.com",
  projectId: "shape-upfitness",
  storageBucket: "shape-upfitness.firebasestorage.app",
  messagingSenderId: "810999536133",
  appId: "1:810999536133:web:9f2eebbfe3e432ced19a6c",
  measurementId: "G-1GRGKFJJ9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);