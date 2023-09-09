import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
 
const firebaseConfig = {
  apiKey: "AIzaSyAMBtaoJKrWGb7H8BktMcqL9CGa41jyrHQ",
  authDomain: "practice-314cf.firebaseapp.com",
  projectId: "practice-314cf",
  storageBucket: "practice-314cf.appspot.com",
  messagingSenderId: "233281521149",
  appId: "1:233281521149:web:638343cc7cac8d87588594",
  measurementId: "G-K2FQER8GKZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);