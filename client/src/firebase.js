// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1a447.firebaseapp.com",
  projectId: "mern-estate-1a447",
  storageBucket: "mern-estate-1a447.appspot.com",
  messagingSenderId: "988862678795",
  appId: "1:988862678795:web:6bee0bb18507116c85440e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
