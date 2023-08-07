export const crearNuevaLinea = (nombre, email, id) => {
    const linea = document.createElement("tr");
    linea.innerHTML = `
        <td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
                <li>
                <a
                    href="../screens/editar_cliente.html?id=${id}"
                    class="simple-button simple-button--edit"
                    >Editar</a
                >
                </li>
                <li>
                    <button
                        class="simple-button simple-button--delete"
                        type="button"
                        id= ${id}
                        data-btnDelete
                    >
                        Eliminar
                    </button>
                </li>
            </ul>
        </td>
    `;

    return linea;
};
