/*
  Firebase config provided by user.
  This file initializes Firebase Auth, Firestore and Storage.
*/
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB7AIwiz88RYbKzZjtEUrBUSpw8GeUGUaw",
  authDomain: "aasjtradesandservices.firebaseapp.com",
  projectId: "aasjtradesandservices",
  storageBucket: "aasjtradesandservices.firebasestorage.app",
  messagingSenderId: "896014355825",
  appId: "1:896014355825:web:e9bdcfa5fe8439642f7ad0",
  measurementId: "G-NCYPP12LXQ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
src/styles/variables.css

:root{
  --green-50: #eaf8ef;
  --green-100: #d6f1df;
  --green-200: #bfe7c9;
  --green-500: #1ea44a; /* primary */
  --green-600: #178a3b;
  --text: #222222;
  --muted: #6b6b6b;
  --bg: #ffffff;
  --card-shadow: 0 2px 8px rgba(0,0,0,0.06);
  --radius: 8px;
}
