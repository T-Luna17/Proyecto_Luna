import { useEffect, useState } from "react";
import { getData } from "../../Services/Fetch";

const PerfilUsuario = ({ idUsuario }) => {
    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

useEffect(() => {
    async function fetchUsuario() {
        try {
            const usuarioLS = JSON.parse(localStorage.getItem("usuario"));
            const id = usuarioLS?.id || idUsuario;

            if (!id) {
                setError("No se encontró el ID del usuario.");
                setLoading(false);
                return;
            }

            const data = await getData(`perfil/usuario/${id}/`);
            console.log(`datos de perfil usuario:`, data);

            if (!data || data.detail) {
                setError("No se pudo cargar el perfil del usuario.");
            } else {
                setUsuario(data);
            }
        } catch (error) {
            console.error(error);
            setError("Error al conectar con el servidor.");
        } finally {
            setLoading(false);
        }
    }

    fetchUsuario();
    if (idUsuario) fetchUsuario();
}, [idUsuario]);


    if (loading) return <p className="loading-msg">Cargando perfil del usuario...</p>;
    if (error) return <p className="error-msg">{error}</p>;

    return (
        <div className="perfil-usuario-container">
            <h2 className="perfil-usuario-titulo">
                {usuario.first_name} {usuario.last_name}
            </h2>

            <div className="perfil-usuario-info">
                <p><strong>Nombre de usuario:</strong> {usuario.username}</p>
                <p><strong>Correo:</strong> {usuario.email}</p>
                <p><strong>Cédula:</strong> {usuario.num_cedula || "No registrada"}</p>
                <p><strong>Teléfono:</strong> {usuario.num_telefono || "No registrado"}</p>
                <p><strong>Dirección:</strong> {usuario.direccion || "No especificada"}</p>
                <p><strong>Fecha de nacimiento:</strong>{" "}
                    {usuario.fecha_nacimiento
                        ? new Date(usuario.fecha_nacimiento).toLocaleDateString()
                        : "No registrada"
                    }
                </p>
                <p><strong>Género:</strong> {usuario.genero || "No especificado"}</p>
            </div>
        </div>
    );
};

export default PerfilUsuario;
