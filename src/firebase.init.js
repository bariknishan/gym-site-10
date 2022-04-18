// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" ;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDyBLOTvueHuiUnYEMccuRKlT_sOfqfu8",
  authDomain: "fitnes-mania.firebaseapp.com",
  projectId: "fitnes-mania",
  storageBucket: "fitnes-mania.appspot.com",
  messagingSenderId: "802750984627",
  appId: "1:802750984627:web:3f86d1842da428e0b19bc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;