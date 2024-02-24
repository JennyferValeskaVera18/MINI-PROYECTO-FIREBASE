import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import {auth} from "./app/firebase.js"

//Importo al main porque es nuetro archivo princial en donde está linkeado el html
import "./app/signupForm.js"
import "./app/logout.js"

onAuthStateChanged(auth, async(user) => {
    console.log(user)
});