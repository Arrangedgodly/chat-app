import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAUs93JO-St725YZay3JkFXEk9C-_ALK3M",
  authDomain: "chat-app-103a6.firebaseapp.com",
  projectId: "chat-app-103a6",
  storageBucket: "chat-app-103a6.appspot.com",
  messagingSenderId: "198544374363",
  appId: "1:198544374363:web:dcfe9d1e1377d0c76a5d7e",
  measurementId: "G-P1RKZ985RJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);