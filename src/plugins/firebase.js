import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Importe outros serviços do Firebase que você precisar (auth, storage, etc)

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
// Inicialize o Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Inicialize os serviços
const db = getFirestore(firebaseApp);

export { db, firebaseApp };
