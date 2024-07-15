import '../../../../sass/layout/Material/_espera.scss'

const Espera = ({documento}) => {
    
    const{_id, materia, url} = documento;

    return (

        <table className="waiting-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Materia</th>
                    <th>Acciones</th>
                    <th>Control</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{_id}</td>
                    <td>{materia}</td>
                    <td className='url-admin'>{url}</td>
                    <td >
                        <button className="reject-btn">Eliminar</button>
                    </td>

                </tr>
                {/* Puedes agregar más filas según sea necesario */}
            </tbody>
        </table>

    )
}

export default Espera