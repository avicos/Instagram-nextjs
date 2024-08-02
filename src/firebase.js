// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "instagram-next-d7fdc.firebaseapp.com",
  projectId: "instagram-next-d7fdc",
  storageBucket: "instagram-next-d7fdc.appspot.com",
  messagingSenderId: "797219773750",
  appId: "1:797219773750:web:699fa5e3c8d50a16e36797"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);