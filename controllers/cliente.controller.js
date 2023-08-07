import { clienteServices } from "../services/client.service.js";
import { crearNuevaLinea } from "./clientUI/crearNuevaLinea.js";

const table = document.querySelector("[data-table]");

// mostrar clientes en pantalla
const mostrarClientes = async () => {
    try {
        const clientes = await clienteServices.listaCLientes();
        clientes.forEach(({ email, nombre, id }) => {
            const nuevaLinea = crearNuevaLinea(nombre, email, id);
            table.appendChild(nuevaLinea);
        });
    } catch (error) {
        console.log(error);
    }
};
mostrarClientes();

// habilitar btn delete
const setupDeleteButtonHandlers = () => {
    table.addEventListener("click", async (e) => {
        const btnClick = e.target.closest("[data-btnDelete]");
        if (btnClick) {
            const id = btnClick.id;
            try {
                await clienteServices.deleteCliente(id);
            } catch (error) {
                console.log(`Ocurrio un error: ${error}`);
                window.location.href = "/screens/error.html";
            }
        }
    });
};
setupDeleteButtonHandlers();
