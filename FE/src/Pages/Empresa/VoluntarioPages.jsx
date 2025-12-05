import { useEffect, useState } from "react";
import Sidebar from "../../Components/Empresa/PaginaPrincipalE/Sidebar";
import Navbar from "../../Components/Empresa/PaginaPrincipalE/Navbar";
import { getData } from "../../Services/Fetch";
import "../../Style/Voluntarios.css"

function VoluntariosPage() {
  const [voluntarios, setVoluntarios] = useState([]);

  useEffect(() => {
    cargarVoluntarios();
  }, []);

  async function cargarVoluntarios() {
    const data = await getData("usuarios/");
    setVoluntarios(data);
  }

  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <h2>Voluntarios Inscritos a Mis Eventos</h2>

        <div className="voluntarios-lista">
          {voluntarios.map((v) => (
            <div key={v.id} className="card">
              <h3>{v.nombre}</h3>
              <p><strong>Correo:</strong> {v.correo}</p>
              <p><strong>Evento:</strong> {v.evento}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VoluntariosPage;
