import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGZ0v8JVVqBbsQ61gpzk5py8TKGOZFljk",
  authDomain: "ecommerce-react-native-bbca0.firebaseapp.com",
  projectId: "ecommerce-react-native-bbca0",
  storageBucket: "ecommerce-react-native-bbca0.firebasestorage.app",
  messagingSenderId: "165700390560",
  appId: "1:165700390560:web:ae5cfbb3233b40d8c703c5"
};

export const initFirebase = initializeApp(firebaseConfig);
const auth = getAuth();
export{auth};