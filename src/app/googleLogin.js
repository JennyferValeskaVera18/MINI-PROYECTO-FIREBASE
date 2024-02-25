import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js"

const googleButton = document.querySelector("#googleLogin"); // Corrección: agregué "#" para seleccionar por ID

googleButton.addEventListener("click", async () => { // Corrección: arreglé el nombre de la variable googleButton
    
    const provider = new GoogleAuthProvider();

    try {
        const credentials = await signInWithPopup(auth, provider);
        modal.hide();
        showMessage("Welcome dear " + credentials.user.displayName, "success"); // Corrección: cambié "succes" a "success"
    } catch (error) {
        console.log(error);
    }

});
