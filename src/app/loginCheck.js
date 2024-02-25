//Si existe el usuario no se va a ver sign in o sing up, solo logout

const loggedOutLinks = document.querySelectorAll(".logged-out")
const loggedInLinks = document.querySelectorAll(".logged-in")

console.log(loggedInLinks)
console.log(loggedOutLinks)

export const LoginCheck = user => {
    if (user) {
        loggedInLinks.forEach(link => link.style.display = "block")
        loggedOutLinks.forEach(link => link.style.display = "none")
        //por cada enlace, usamos su propiedad llmada styles, y display en none
        
    } else { //Si el usuario noe xiste:
        loggedOutLinks.forEach(link => link.style.display = "block")
        loggedInLinks.forEach(link => link.style.display = "none")

    }
}