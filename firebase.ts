import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW3-9Njm-f1lnWpx6z_NjN2MsgoUnhLoY",
  authDomain: "nexus-1a569.firebaseapp.com",
  projectId: "nexus-1a569",
  storageBucket: "nexus-1a569.appspot.com",
  messagingSenderId: "650916469615",
  appId: "1:650916469615:web:2db7fcfe12c994ca56a69a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();