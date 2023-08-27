// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_N1m6Xz89VppiKS3-UaSnYw6xCg_zrw8",
  authDomain: "h-contact-app.firebaseapp.com",
  projectId: "h-contact-app",
  storageBucket: "h-contact-app.appspot.com",
  messagingSenderId: "405304389937",
  appId: "1:405304389937:web:f571137bb979fcc3fd8010",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
