//Funcion para validar datos de los usuarios
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js";

// Traemos el form necesario por id y lo guardamos en constante
const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit", async e => {
    // Para prevenir que la pagina se recarge
    e.preventDefault()
    // Accedemos a los elementos con notación de corchete
    const email = signInForm["login-email"].value;
    const password = signInForm["login-password"].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        console.log(credentials)

        /*Si la autenticación es exitosa, se realiza alguna lógica adicional. En este caso, parece que se oculta un modal de inicio de sesión utilizando Bootstrap
         y se muestra un mensaje de bienvenida al usuario utilizando la función showMessage.*/

        const modal = bootstrap.Modal.getInstance(document.querySelector("#signinModal"))
        modal.hide()

        showMessage("Welcome dear " + credentials.user.email)
    } catch (error) {
        console.log(error);
        if(error.code === "auth/wrong-password") {
            showMessage("Wrong password", "red") //coloco los argumentos de las variables de la función
        }
        else if (error.code === "auth/user-not-found") {
            //alert("Weak password");
            showMessage("User not found", "red")
        }
        else {
            //alert("Something went wrong :( ");
            showMessage(error.message, "red")
        }

    }
    
    
})