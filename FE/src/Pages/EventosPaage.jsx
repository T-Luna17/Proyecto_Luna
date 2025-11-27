import { useEffect, useState } from "react";
import Sidebar from "../Components/Empresa/PaginaPrincipalE/Sidebar";
import Navbar from "../Components/Empresa/PaginaPrincipalE/Navbar";
import { getData, postData } from "../Services/Fetch";
import "../style/Eventos.css"

function EventosPage() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    cargarEventos();
  }, []);

  async function cargarEventos() {
    const data = await getData("voluntariados/list/");
    setEventos(data);
  }

  async function crearEvento() {
    await postData("crear-voluntariado/", {
      titulo: "Nuevo evento",
      descripcion: "Descripción...",
      fecha: "2025-01-01",
    });
    cargarEventos();
  }

  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <h2>Eventos</h2>

        <button className="agregar-btn" onClick={crearEvento}>
          + Agregar Evento
        </button>

        <div className="evento-lista">
          {eventos.map((ev) => (
            <div key={ev.id} className="card">
              <h3>{ev.titulo}</h3>
              <p>{ev.descripcion}</p>
              <p><strong>Fecha:</strong> {ev.fecha}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventosPage;
