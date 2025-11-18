import { useEffect, useState } from "react";
import { getData } from "../../Services/Fetch";

const PerfilV = () => {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        async function fetchUsuario() {
            const data = await getData(`usuarios/perfil/usuario/${localStorage.getItem("idUsuario") || ""}/`);
            setUsuario(data);
        }
        fetchUsuario();
    }, []);
    if (!usuario) return <p>Cargando perfil...</p>;
    return (
        <div className="perfil-usuario">
            <h2>{usuario.first_name} {usuario.last_name}</h2>
            <p><strong>Nombre de usuario:</strong> {usuario.username}</p>
            <p><strong>Correo:</strong> {usuario.email}</p>
            <p><strong>Cédula:</strong> {usuario.num_cedula}</p>
            <p><strong>Teléfono:</strong> {usuario.num_telefono}</p>
            <p><strong>Dirección:</strong> {usuario.direccion}</p>
            <p><strong>Fecha de nacimiento:</strong> {usuario.fecha_nacimiento}</p>
            <p><strong>Género:</strong> {usuario.genero}</p>
        </div>
    );
}
export default PerfilV;