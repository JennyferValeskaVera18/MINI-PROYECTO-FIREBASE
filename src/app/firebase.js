
 // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDgsdEY6w6gplH8ZPugJbmVsaD07lIHbBI",
   authDomain: "practica-68ef2.firebaseapp.com",
   projectId: "practica-68ef2",
   storageBucket: "practica-68ef2.appspot.com",
   messagingSenderId: "128162765710",
   appId: "1:128162765710:web:06a1219437b18d01bd62df",
   measurementId: "G-PX51L4L1GQ"
 };

 // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
 //Lo exporto como Una constante que ya se puede utilizar para autenticar usuarios 