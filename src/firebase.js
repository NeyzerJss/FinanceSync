import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5PzrUf6rba9OZuBWYXB1DCDrSskQ5N3I",
  authDomain: "financesync-19205.firebaseapp.com",
  projectId: "financesync-19205",
  storageBucket: "financesync-19205.firebasestorage.app",
  messagingSenderId: "1096149232017",
  appId: "1:1096149232017:web:c938177d146905126c9230",
  measurementId: "G-FZRNX4DMC8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
