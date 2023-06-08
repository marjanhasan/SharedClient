// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_GaTyB7jjHjDmAUQHfSCLjW4PyDeOXSE",
  authDomain: "all-in-one-be0e3.firebaseapp.com",
  projectId: "all-in-one-be0e3",
  storageBucket: "all-in-one-be0e3.appspot.com",
  messagingSenderId: "297375449332",
  appId: "1:297375449332:web:ba04656272a3e538105ea1"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);

export default app