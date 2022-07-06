// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY9NJNE9rAQs57TXxfJ1cw4bHE8aYOqP8",
  authDomain: "uber-next-clone-f5ca6.firebaseapp.com",
  projectId: "uber-next-clone-f5ca6",
  storageBucket: "uber-next-clone-f5ca6.appspot.com",
  messagingSenderId: "295525584505",
  appId: "1:295525584505:web:942eaaa71ca46aab654ea8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
