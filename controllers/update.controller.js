import { clienteServices } from "../services/client.service.js";
// acceder a la informacion del formulario
const form = document.querySelector("[data-form]");
const nombreUser = document.querySelector("[data-nombre]");
const emailUser = document.querySelector("[data-email]");

// obtener el id como parametro en la url
const url = new URL(window.location);
const id = url.searchParams.get("id");

const cargarDatosCliente = async () => {
    try {
        const { nombre, email } = await clienteServices.getOneCliente(id);
        nombreUser.value = nombre;
        emailUser.value = email;
    } catch (error) {
        window.location.href = "/screens/error.html";
        console.error(
            "Error al obtener la información del cliente:",
            error.message
        );
    }
};
cargarDatosCliente();

const actualizarCliente = () => {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        try {
            await clienteServices.updateCliente(
                nombreUser.value,
                emailUser.value,
                id
            );
            window.location.href = "/screens/edicion_concluida.html";
        } catch (error) {
            console.error("Error al actualizar el cliente:", error.message);
        }
    });
};
actualizarCliente();
