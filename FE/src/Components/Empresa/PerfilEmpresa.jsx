import { useEffect, useState } from "react";
import { getData } from "../../Services/Fetch";

const PerfilEmpresa = ({ idEmpresa }) => {
    const [empresa, setEmpresa] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchEmpresa() {
            try {
                const data = await getData(`usuarios/perfil/empresa/${idEmpresa}/`);

                if (!data || data.detail) {
                    setError("No se pudo cargar la información de la empresa.");
                } else {
                    setEmpresa(data);
                }
            } catch (error) {
                setError("Error al conectar con el servidor.");
            }
        }

        if (idEmpresa) fetchEmpresa();
        else setError("No se encontró el ID de la empresa.");

    }, [idEmpresa]);


    if (error) return <p className="error-msg">{error}</p>;
    if (!empresa) return <p className="loading-msg">Cargando perfil de la empresa...</p>;

    return (
        <div id="perfil-empresa" className="perfil-container">
            <h2 className="perfil-titulo">{empresa.nombre}</h2>

            <div className="perfil-info">
                <p><strong>Descripción:</strong> {empresa.descripcion || "Sin descripción"}</p>
                <p><strong>Teléfono:</strong> {empresa.telefono || "No disponible"}</p>
                <p><strong>Correo:</strong> {empresa.correo_contacto || "No disponible"}</p>
                <p><strong>Dirección:</strong> {empresa.direccion || "No especificada"}</p>
                <p><strong>Sitio web:</strong> 
                    {empresa.sitio_web 
                        ? <a href={empresa.sitio_web} target="_blank" rel="noreferrer">{empresa.sitio_web}</a>
                        : "No especificado"
                    }
                </p>
                <p>
                    <strong>Fecha de registro:</strong> 
                    {empresa.fecha_registro 
                        ? new Date(empresa.fecha_registro).toLocaleDateString()
                        : "-"
                    }
                </p>
            </div>
        </div>
    );
};

export default PerfilEmpresa