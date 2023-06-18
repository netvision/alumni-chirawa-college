import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { LocalStorage } from "quasar";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "allumni-chirawa.firebaseapp.com",
  projectId: "allumni-chirawa",
  storageBucket: "allumni-chirawa.appspot.com",
  messagingSenderId: "857724689661",
  appId: "1:857724689661:web:de566e80e1f8d5c19b7294",
  measurementId: "G-YGBD06X7M1",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    LocalStorage.set("user", user);
  } else {
    LocalStorage.remove("user");
  }
});
