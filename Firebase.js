// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8J6-6YkStbIypVrOPm-714QOgOA8wHqg",
  authDomain: "prueba-4008a.firebaseapp.com",
  projectId: "prueba-4008a",
  storageBucket: "prueba-4008a.appspot.com",
  messagingSenderId: "715275273095",
  appId: "1:715275273095:web:3b28a16d6957960f204922",
  measurementId: "G-LDRMMF4EJJ"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;