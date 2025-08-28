// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5tStGVrLYd_cKcpHfwUaSVcafDQ2AX9w",
  authDomain: "myfirstapp-96994.firebaseapp.com",
  projectId: "myfirstapp-96994",
  storageBucket: "myfirstapp-96994.firebasestorage.app",
  messagingSenderId: "328572190484",
  appId: "1:328572190484:web:faa05acc7a00b1730c8c01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth};