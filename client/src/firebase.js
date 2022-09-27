import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsrkf9-6C372mK7Vh7CEePp2upbjqgjSI",
  authDomain: "onlyfit-347af.firebaseapp.com",
  projectId: "onlyfit-347af",
  storageBucket: "onlyfit-347af.appspot.com",
  messagingSenderId: "5762730675",
  appId: "1:5762730675:web:7a8fb4f31474c8e9cdfec6",
  measurementId: "G-90TF46NSF2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;
