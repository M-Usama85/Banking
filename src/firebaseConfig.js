// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6vubvVM0n-5z56RLvgOP1ltSqTNobT90",
  authDomain: "banking-app-feed8.firebaseapp.com",
  projectId: "banking-app-feed8",
  storageBucket: "banking-app-feed8.appspot.com",
  messagingSenderId: "793384583289",
  appId: "1:793384583289:web:a649a073e8be11836654a8",
  measurementId: "G-BXSML3VNC6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { provider, auth };
