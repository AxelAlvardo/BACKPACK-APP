import '../../../sass/layout/Denuncia/_denuncia_info.scss'

const Denuncia = () => {

    return (
        <table className="denuncia-table">
            <thead>
                <tr>
                    <th>URL</th>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Aprobación</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>http://ecampus.com</td>
                    <td>UsuarioDenunciante</td>
                    <td>Material Tipo</td>
                    <td>
                        <button className="aprobar">Aprobar</button>
                        <button className="desaprobar">Desaprobar</button>
                    </td>
                </tr>
                {/* TODO: Puedes agregar más filas según sea necesario */}
            </tbody>
        </table>
    );

}
export default Denuncia