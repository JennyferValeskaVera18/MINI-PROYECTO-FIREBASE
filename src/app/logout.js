//signOut es una función de Frebase que nos hace cerrar sesión
import {signOut} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { auth } from "./firebase.js" //Desde firebase traigo el objeto Auth
//Obtener el elemnto desde el ID
const logout = document.querySelector("#logout")


logout.addEventListener("click", async() => {
    //console.log("logout")
    await signOut(auth)
    console.log("user signed out")
    // e.preventDefault();
    // try {
    //   await signOut(auth)
    //   console.log("signup out");
    // } catch (error) {
    //   console.log(error)
    // }
});