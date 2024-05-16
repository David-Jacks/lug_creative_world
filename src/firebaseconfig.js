// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg3ddZ3azP9Gn5GduUv07Da-SHC5He_aM",
  authDomain: "scholarscribe-24510.firebaseapp.com",
  projectId: "scholarscribe-24510",
  storageBucket: "scholarscribe-24510.appspot.com",
  messagingSenderId: "659474113977",
  appId: "1:659474113977:web:1b0daabb74f88d626dc268",
  measurementId: "G-2R4PS3HXT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);