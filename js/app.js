const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

(function() {
    emailjs.init("u90w-gEzgRWh34Q7Z");
    console.log("email inicializado") // Reemplaza "TU_USER_ID" con tu User ID de EmailJS
})();


// Manejar el evento de envío del formulario
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página

    // Recopilar datos del formulario
    const fullName = event.target.full_name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // Parámetros de EmailJS
    const serviceID = "service_ypmshj4"; // Reemplaza con tu Service ID
    const templateID = "template_dinxng8"; // Reemplaza con tu Template ID

    // Enviar el correo
    emailjs.send(serviceID, templateID, {
        full_name: fullName,
        email: email,
        message: message
    })
    .then(response => {
        alert('¡Mensaje enviado correctamente!');
        event.target.reset(); // Opcional: reinicia el formulario
    })
    .catch(error => {
        alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
        console.error('Error:', error);
    });
});