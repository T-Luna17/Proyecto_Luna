import { useEffect, useState } from "react";
import { getData } from "../../../Services/Fetch";

const PerfilEventos = ({ empresaId }) => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    async function fetchEventos() {
      const data = await getData(`eventos/lista/${empresaId}/`);
      setEventos(data);
    }
    fetchEventos();
  }, [empresaId]);

  return (
    <div className="perfil-card">
      <h3>Eventos de la empresa</h3>

      {eventos.length === 0 && <p>No hay eventos registrados.</p>}

      {eventos.map((event) => (
        <div key={event.id} className="perfil-evento-item">
          <h4>{event.titulo}</h4>
          <p><strong>Fecha:</strong> {event.fecha}</p>
          <p><strong>Descripción:</strong> {event.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

export default PerfilEventos;
