import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore"

// TODO: Replace the following with your app  's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuVMNLCLzGDXrbKKs3iunairs_aFTCWjo",
  authDomain: "aldus-platform.firebaseapp.com",
  projectId: "aldus-platform",
  storageBucket: "aldus-platform.appspot.com",
  messagingSenderId: "965838829330",
  appId: "1:965838829330:web:963ee78d9b6980b44025cb"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

if (process.env.NODE_ENV === 'development') {
  connectFirestoreEmulator(db, 'localhost', 8081);
}

export { db }