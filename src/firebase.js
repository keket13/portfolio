// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqcu6Zlel3OOagVkyF0dxV9Nw6Cro7dLQ",
  authDomain: "portfolio-afabc.firebaseapp.com",
  projectId: "portfolio-afabc",
  storageBucket: "portfolio-afabc.appspot.com",
  messagingSenderId: "110769852195",
  appId: "1:110769852195:web:26a230b45298d12e140696"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;