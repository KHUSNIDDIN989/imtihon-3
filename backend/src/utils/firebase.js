// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg1BM8Wh7OMu2u10vj1jFDXyjbrFFfh80",
  authDomain: "credohouse-8e578.firebaseapp.com",
  projectId: "credohouse-8e578",
  storageBucket: "credohouse-8e578.appspot.com",
  messagingSenderId: "932474621765",
  appId: "1:932474621765:web:828b9ade4ff683237f782c",
  measurementId: "G-8LG80HN90H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
