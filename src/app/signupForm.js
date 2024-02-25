//Lo copio de Firebase pero yano para conectarme sino para traer un método que espera 3 parámetros
/*Se importa la función createUserWithEmailAndPassword 
de la biblioteca Firebase Authentication.*/
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"

/*Se importa el objeto auth desde un archivo local 
llamado firebase.js que contiene la configuración de Firebase.*/ 
import { auth } from "./firebase.js"; //El 1er parámetro que espera es la configuración
import {showMessage} from "./showMessage.js"
const signUpForm = document.querySelector("#signup-form")

signUpForm.addEventListener("submit", async(e) => { //El async es para que funcione el await 
    e.preventDefault();

    const email =  signUpForm["signup-email"].value
    const password = signUpForm["signup-password"].value

    console.log(email, password) //el await es como una promesa

    try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredentials)
    //Para que desaparezca el modal al registrarme
    const signupModal = document.querySelector("#signupModal") //Selecciono el modal a traves del ID
    const modal = bootstrap.Modal.getInstance(signupModal)
    modal.hide()

    showMessage("Welcome dear " + userCredentials.user.email)


    } catch (error) {
        /*console.log(error.message)
        console.log(error.code)*/

        if(error.code === "auth/email-already-in-use") {
            //alert("Email already in use")
            showMessage("Email already in use", "red") //coloco los argumentos de las variables de la función
        }
        else if (error.code === "auth/invalided-email") {
            //alert("Email invalided");
            showMessage("Email invalided", "red")
        }
        else if (error.code === "auth/weak-password") {
            //alert("Weak password");
            showMessage("Weak password", "red")
        }
        else {
            //alert("Something went wrong :( ");
            showMessage("Something went wrong", "red")
        }

    }
})