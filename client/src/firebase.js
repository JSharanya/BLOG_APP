// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a6e40.firebaseapp.com",
  projectId: "mern-blog-a6e40",
  storageBucket: "mern-blog-a6e40.appspot.com",
  messagingSenderId: "451011016680",
  appId: "1:451011016680:web:f92252561f1747c738d65d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

