import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore"

// TODO: Replace the following with your app  's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuVMNLCLzGDXrbKKs3iunairs_aFTCWjo",
  authDomain: "aldus-platform.firebaseapp.com",
  projectId: "aldus-platform",
  storageBucket: "aldus-platform.appspot.com",
  messagingSenderId: "965838829330",
  appId: "1:965838829330:web:59f60fd2705613a94025cb"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

if (process.env.NODE_ENV === 'development_') {
  connectFirestoreEmulator(db, 'localhost', 8081);
}

export { db }