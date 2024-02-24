/*Message es para poner le mensaje que queremos y type es el color*/ 
export function showMessage(message, color) {
    Toastify({
        text: message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: color, //El color esta en el llamado de la funcion en SignUp
        },
        onClick: function(){} // Callback after click
      }).showToast();
}