import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCVchO9z0IKblAw90QovC0NdK-Xxh6Kkig",
  authDomain: "chat-app-be539.firebaseapp.com",
  projectId: "chat-app-be539",
  storageBucket: "chat-app-be539.appspot.com",
  messagingSenderId: "137456690057",
  appId: "1:137456690057:web:8735f48d54c93cb618f758"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore();