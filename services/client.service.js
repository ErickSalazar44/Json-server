import { BASE_URL_PERFIL } from "../utils/const_url.js";
import { generateUUID } from "../utils/id_random.js";

const fetchJson = async (url, options) => {
    const res = await fetch(url, options);
    if (!res.ok)
        throw new Error(`Error al hacer la solicitud: ${res.statusText}`);
    return res.json();
};

// GET
const listaCLientes = async () => await fetchJson(BASE_URL_PERFIL);

// POST
const crearCliente = async (nombre, email) => {
    const options = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ nombre, email, id: generateUUID() }),
    };

    await fetchJson(BASE_URL_PERFIL, options);
};

// DELETE
const deleteCliente = async (id) => {
    const options = {
        method: "DELETE",
    };
    await fetchJson(`${BASE_URL_PERFIL}/${id}`, options);
};

// GET ONE
const getOneCliente = async (id) => await fetchJson(`${BASE_URL_PERFIL}/${id}`);

// UPDATE
const updateCliente = async (nombre, email, id) => {
    const options = {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ nombre, email }),
    };
    await fetchJson(`${BASE_URL_PERFIL}/${id}`, options);
};

export const clienteServices = {
    listaCLientes,
    crearCliente,
    deleteCliente,
    getOneCliente,
    updateCliente,
};
