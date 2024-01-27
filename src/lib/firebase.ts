import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAUs93JO-St725YZay3JkFXEk9C-_ALK3M",
  authDomain: "chat-app-103a6.firebaseapp.com",
  projectId: "chat-app-103a6",
  storageBucket: "chat-app-103a6.appspot.com",
  messagingSenderId: "198544374363",
  appId: "1:198544374363:web:dcfe9d1e1377d0c76a5d7e",
  measurementId: "G-P1RKZ985RJ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const handleGoogleAuth = async () => {
  const provider = new GoogleAuthProvider();
  const res = await signInWithPopup(auth, provider);
  return res;
};

export const handleEmailSignup = async (email: string, password: string) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  return res;
};

export const handleEmailLogin = async (email: string, password: string) => {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res;
};

export const handleLogout = async () => {
  signOut(auth);
};

export const handleCreateUser = async (uid: string, user: any) => {
  const res = await setDoc(doc(db, "users", uid), user);
  return res;
};

export const checkUserData = async (uid: string) => {
  const userRef = doc(db, "users", uid);
  const userSnapshot = await getDoc(userRef);
  return userSnapshot.exists();
};

export const getUserData = async (uid: string) => {
  const userRef = doc(db, "users", uid);
  const userSnapshot = await getDoc(userRef);
  return userSnapshot.data();
};

export const handleUploadPhoto = async (file: any, uid: string) => {
  const storageRef = ref(storage, `users/${uid}/${file.name}`);
  const res = await uploadBytes(storageRef, file);
  return res;
};

export const updateUserProfilePicture = async (uid: string, url: string) => {
  const userRef = doc(db, "users", uid);
  const res = await setDoc(userRef, { profilePicture: url }, { merge: true });
  return res;
};
