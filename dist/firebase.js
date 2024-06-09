"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
// Import the functions you need from the SDKs you need
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
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
const app = (0, app_1.initializeApp)(firebaseConfig);
const db = (0, firestore_1.getFirestore)(app);
exports.db = db;
