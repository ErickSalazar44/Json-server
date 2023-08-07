import { clienteServices } from "../services/client.service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = formulario.querySelector("[data-nombre]").value;
    const email = formulario.querySelector("[data-email]").value;

    clienteServices
        .crearCliente(nombre, email)
        .then(() => {
            window.location.href = "/screens/registro_completado.html";
        })
        .catch((err) => console.log(err));
});
