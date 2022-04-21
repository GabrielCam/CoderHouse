
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDJzx6CrNzXx7E35NbGsRN-XP2gwiGom5I",
  authDomain: "backbuyzone.firebaseapp.com",
  projectId: "backbuyzone",
  storageBucket: "backbuyzone.appspot.com",
  messagingSenderId: "345326049163",
  appId: "1:345326049163:web:110e2738ddaeb82aaf418e"
};


const app = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore(app)