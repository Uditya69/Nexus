import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
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
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage=getStorage();
export const db = getFirestore()
