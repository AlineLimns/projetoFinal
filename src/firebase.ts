// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVcCNbXTQT8GAnt2MwOloGEQgrcXhjUAU",
  authDomain: "projetofinal-4813c.firebaseapp.com",
  projectId: "projetofinal-4813c",
  storageBucket: "projetofinal-4813c.appspot.com",
  messagingSenderId: "951725114379",
  appId: "1:951725114379:web:9b22bc71cd9cd5efe3330e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };