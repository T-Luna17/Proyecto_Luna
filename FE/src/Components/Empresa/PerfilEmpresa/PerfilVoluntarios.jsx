import { useEffect, useState } from "react";
import { getData } from "../../../Services/Fetch";

const PerfilVoluntarios = ({ empresaId }) => {
  const [voluntarios, setVoluntarios] = useState([]);

  useEffect(() => {
    async function fetchVoluntarios() {
      const data = await getData(`eventos/voluntarios/${empresaId}/`);
      setVoluntarios(data);
    }
    fetchVoluntarios();
  }, [empresaId]);

  return (
    <div className="perfil-card">
      <h3>Voluntarios inscritos</h3>

      {voluntarios.length === 0 && <p>No hay voluntarios aún.</p>}

      {voluntarios.map((vol) => (
        <div key={vol.id} className="perfil-voluntario-item">
          <p><strong>{vol.nombre}</strong> — {vol.email}</p>
        </div>
      ))}
    </div>
  );
};

export default PerfilVoluntarios;
