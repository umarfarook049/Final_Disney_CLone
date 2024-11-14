
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDRsI0kk4HyH9c918dmYGytitA7-GsY5v8",
  authDomain: "disney-clone-7f159.firebaseapp.com",
  projectId: "disney-clone-7f159",
  storageBucket: "disney-clone-7f159.firebasestorage.app",
  messagingSenderId: "1026184160055",
  appId: "1:1026184160055:web:679a95f92751e5e31e70b2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)