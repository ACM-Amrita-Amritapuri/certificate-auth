import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBhlvBDdwz-NVfNvZp5H9l2cIKA-c4h-oM",
  authDomain: "cert-auth-40f46.firebaseapp.com",
  projectId: "cert-auth-40f46",
  storageBucket: "cert-auth-40f46.appspot.com",
  messagingSenderId: "143692607851",
  appId: "1:143692607851:web:3b2b2fa0943d1978fe5c2e",
  measurementId: "G-32M7J9519K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
