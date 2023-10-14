document.addEventListener('DOMContentLoaded', function () {



    const inputEmail = document.querySelector('#Email');
    const botonEnviar = document.querySelector('#botonEnviar');
    const suscripcion = document.querySelector('#suscripcion');
    const botonAlerta = document.querySelector('#botonAlerta');
    const error = document.querySelector('H3');
    const final = document.querySelector('#final')

    inputEmail.addEventListener('blur', aviso);
    botonEnviar.addEventListener('click', alerta);
    botonAlerta.addEventListener('click', removerAlerta);



    function aviso(e) {
        if (e.target.value.trim() === '') {
            // mostrarError();
            error.classList.remove("hidden");
            inputEmail.classList.add("bg-red-100");

        } else {
            error.classList.add("hidden")
            final.textContent = `A confirmation email has been sent to
            ${e.target.value} .Please open it and click
          the button inside to confirm your subscription.`;

        }

    }

    function alerta(e) {
        suscripcion.classList.replace("hidden", 'block')

        console.log("enviado")
    }

    function removerAlerta(e) {
        suscripcion.classList.add('hidden')
        console.log("aviso retirado")
    }

})
