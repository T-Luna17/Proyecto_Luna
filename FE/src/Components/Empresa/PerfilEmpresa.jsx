import { useEffect, useState } from "react";
import { getData } from "../../Services/Fetch";

const PerfilEmpresa = ({ idEmpresa }) => {
    const [empresa, setEmpresa] = useState(null);

    useEffect(() => {
        async function fetchEmpresa() {
            const data = await getData(`usuarios/perfil/empresa/${idEmpresa}/`);
            setEmpresa(data);
        }
        if(idEmpresa) fetchEmpresa();
    }, [idEmpresa]);

    if (!empresa) return <p>Cargando perfil de la empresa...</p>;
    return (
        <div id="perfil-empresa">
            <h2>{empresa.nombre}</h2>
            <p><strong>Descripción:</strong> {empresa.descripcion}</p>
            <p><strong>Teléfono:</strong> {empresa.telefono}</p>
            <p><strong>Correo de contacto:</strong> {empresa.correo_contacto}</p>
            <p><strong>Dirección:</strong> {empresa.direccion}</p>
            <p><strong>Sitio web:</strong> {empresa.sitio_web || "No especificado"}</p>
            <p><strong>Fecha de registro:</strong> {empresa.fecha_registro ? new Date(empresa.fecha_registro).toLocaleDateString() : "-"}</p>
        </div>
    )
}

export default PerfilEmpresa;