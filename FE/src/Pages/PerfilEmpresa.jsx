import { useEffect, useState } from "react";
import { getData } from "../../Services/Fetch";

import CardInfoGeneral from "../Components/Empresa/PerfilEmpresa/InfoGeneral";
import CardContacto from "../Components/Empresa/PerfilEmpresa/Contacto";
import CardDetalles from "../Components/Empresa/PerfilEmpresa/Detalles";

const PerfilEmpresa = ({ idEmpresa }) => {
  const [empresa, setEmpresa] = useState(null);

  useEffect(() => {
    async function fetchEmpresa() {
      const data = await getData(`usuarios/perfil/empresa/${idEmpresa}/`);
      setEmpresa(data);
    }
    if (idEmpresa) fetchEmpresa();
  }, [idEmpresa]);

  if (!empresa) return <p>Cargando perfil de la empresa...</p>;

  return (
    <div id="perfil-empresa" className="perfil-container">
      <CardInfoGeneral 
        nombre={empresa.nombre}
        descripcion={empresa.descripcion}
      />

      <CardContacto
        telefono={empresa.telefono}
        correo={empresa.correo_contacto}
      />

      <CardDetalles
        direccion={empresa.direccion}
        sitio_web={empresa.sitio_web}
        fecha_registro={empresa.fecha_registro}
      />
    </div>
  );
};

export default PerfilEmpresa;
