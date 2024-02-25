//Desde la biblioteca Auth traigo una funcion que nos hace saber si la autenticación ha cambiado
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import {auth} from "./app/firebase.js"
import { LoginCheck } from "./app/loginCheck.js" //importamos funcion de logincheck

//Importo al main porque es nuetro archivo princial en donde está linkeado el html
import "./app/signupForm.js"
import "./app/signinForm.js"
import "./app/googleLogin.js"
import "./app/logout.js"

onAuthStateChanged(auth, async(user) => {
    LoginCheck(user)
    // if (user) {
    //     LoginCheck(user)
    // }else {
    //     LoginCheck(user)  

    // }

});