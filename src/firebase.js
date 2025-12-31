import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore as getfirebaseFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdMAVmOJlQUsOv6g5nK4_9Zvayi35PusY",
  authDomain: "todo-hq.firebaseapp.com",
  projectId: "todo-hq",
  storageBucket: "todo-hq.firebasestorage.app",
  messagingSenderId: "519641085332",
  appId: "1:519641085332:web:14077ef4adefc881e10b81",
  measurementId: "G-0883VW4KJR",
};

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

const app = initializeApp(firebaseConfig);
export const db=getfirebaseFirestore(app);
export const auth = getAuth(app);
