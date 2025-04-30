import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Importe outros serviços do Firebase que você precisar (auth, storage, etc)

const firebaseConfig = {
  apiKey: "AIzaSyD2paIeD9p22f0D9CaI5Mo-Sex5PanBZF4",
  authDomain: "portifolio-ugspbc.firebaseapp.com",
  projectId: "portifolio-ugspbc",
  storageBucket: "portifolio-ugspbc.firebasestorage.app",
  messagingSenderId: "910631880568",
  appId: "1:910631880568:web:10a7cd4a7011772868aa8d",
};
// Inicialize o Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Inicialize os serviços
const db = getFirestore(firebaseApp);

export { db, firebaseApp };
