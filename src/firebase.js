// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAo-Bbc4nSCZtOg-LgZ62QiO_1_cYWrPFo",
    authDomain: "linkedin-clone-df14e.firebaseapp.com",
    projectId: "linkedin-clone-df14e",
    storageBucket: "linkedin-clone-df14e.appspot.com",
    messagingSenderId: "617249959959",
    appId: "1:617249959959:web:04d60674ee37773411ac52",
    measurementId: "G-TCH1T624Z5"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth();
  export const provider = new GoogleAuthProvider();

