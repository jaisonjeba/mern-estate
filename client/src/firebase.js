// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-8f16f.firebaseapp.com",
  projectId: "mern-estate-8f16f",
  storageBucket: "mern-estate-8f16f.appspot.com",
  messagingSenderId: "449557929110",
  appId: "1:449557929110:web:2929b053b15b5e8830b6b7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);