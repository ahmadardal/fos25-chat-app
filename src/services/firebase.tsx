import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Databasen
import { getAuth } from "firebase/auth"; // Inloggning

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

// 1. Initiera Firebase
const app = initializeApp(firebaseConfig);

// 2. Exportera tjänsterna så du kan använda dem i appen
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;