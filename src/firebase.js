// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPq-YEMVHMkywKP3DUNCzeQVEGrwCLIOM",
  authDomain: "diploma-95bf4.firebaseapp.com",
  projectId: "diploma-95bf4",
  storageBucket: "diploma-95bf4.appspot.com",
  messagingSenderId: "337041187053",
  appId: "1:337041187053:web:c5ba11fd1b42315efc2ce4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// получить список категорий (коллекция документов).
export const categoryCollection = collection(db, 'categories');
export const productCollection = collection(db, 'products');