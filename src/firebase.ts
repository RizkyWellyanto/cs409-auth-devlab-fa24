// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ6bROd_ZKUnHfYXY_iDJ6lE7xvDSKL18",
  authDomain: "cs409-test1.firebaseapp.com",
  projectId: "cs409-test1",
  storageBucket: "cs409-test1.firebasestorage.app",
  messagingSenderId: "900419339743",
  appId: "1:900419339743:web:072f47a43202cf0394b06a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

