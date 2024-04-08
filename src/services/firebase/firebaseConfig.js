// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ89iNgRJ50fjvFsfGoZFa6kihaypUVkg",
  authDomain: "ecommerce-labrin.firebaseapp.com",
  projectId: "ecommerce-labrin",
  storageBucket: "ecommerce-labrin.appspot.com",
  messagingSenderId: "50609063592",
  appId: "1:50609063592:web:6bffe200d05269ad4ea49d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)