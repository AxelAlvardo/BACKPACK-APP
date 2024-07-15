import '../../../../sass/layout/Material/_publicado.scss'

const Publicado = () => {
    return (
        <table className="material-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Usuario</th>
                    <th>Materia</th>
                    <th>Modificación</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Usuario1</td>
                    <td>Materia1</td>
                    <td>
                        <button>Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )

}

export default Publicado