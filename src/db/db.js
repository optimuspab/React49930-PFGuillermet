import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPXsCXr67E3CfYWp-rqb64OlBIgT0zujI",
  authDomain: "trendy-tech-364c8.firebaseapp.com",
  projectId: "trendy-tech-364c8",
  storageBucket: "trendy-tech-364c8.appspot.com",
  messagingSenderId: "868333369685",
  appId: "1:868333369685:web:5f28be019b7ca3c98a57dc"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db