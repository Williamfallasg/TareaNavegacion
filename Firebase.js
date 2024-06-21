// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 
    apiKey: "AIzaSyBqS3cehRCjG-N4Q3GhaqvxAQs1AtZo3yA",
    authDomain: "appfruit-b23dc.firebaseapp.com",
    projectId: "appfruit-b23dc",
    storageBucket: "appfruit-b23dc.appspot.com",
    messagingSenderId: "570896505097",
    appId: "1:570896505097:web:db87a2b5d18b030d349bd8"
  
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;