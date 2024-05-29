// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMDeGmzgqDlbzYe8BiwTzuwb5GGtukYug",
  authDomain: "marketplace-afa04.firebaseapp.com",
  projectId: "marketplace-afa04",
  storageBucket: "marketplace-afa04.appspot.com",
  messagingSenderId: "517951731720",
  appId: "1:517951731720:web:825160d83c177189f279bd",
  measurementId: "G-ELDVC6RTC8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
