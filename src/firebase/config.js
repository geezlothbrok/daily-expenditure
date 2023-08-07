
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYaJ88_Yx8gRS9LHkCKOAZea_HGgxR0wU",
  authDomain: "daily-expenditure-575cb.firebaseapp.com",
  projectId: "daily-expenditure-575cb",
  storageBucket: "daily-expenditure-575cb.appspot.com",
  messagingSenderId: "955678561218",
  appId: "1:955678561218:web:b64d78816a4609f9097c5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;