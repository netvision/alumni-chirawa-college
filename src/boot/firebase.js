// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdyzllkY_ydJezmfbeW3YJcuUHn243x-c",
  authDomain: "allumni-chirawa.firebaseapp.com",
  projectId: "allumni-chirawa",
  storageBucket: "allumni-chirawa.appspot.com",
  messagingSenderId: "857724689661",
  appId: "1:857724689661:web:de566e80e1f8d5c19b7294",
  measurementId: "G-YGBD06X7M1",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth();

export { analytics, auth };

//120222017917
