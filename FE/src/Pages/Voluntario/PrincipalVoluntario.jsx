import { useEffect, useState } from "react";
import SidebarVoluntario from "../../Components/Voluntario/PrincipalPrincipalV/SideBarV";
import NavbarVoluntario from "../../Components/Voluntario/PrincipalPrincipalV/NavBarV";
import BlogCard from "../../Components/Voluntario/PrincipalPrincipalV/BlogCardV"; 
import { getData } from "../../Services/Fetch"; 
import "../../Style/Principal.css";

function PaginaPrincipalVoluntario() {
  const [darkMode, setDarkMode] = useState(false);
  const [eventos, setEventos] = useState([]);

  // Cargar datos del usuario desde localStorage
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    async function getEventos() {
      try {
        const data = await getData("voluntariados/voluntariados/");
        setEventos(data);
      } catch (error) {
        console.error("Error cargando eventos:", error);
      }
    }
    getEventos();
  }, []);

  return (
    <div className="layout">
      <SidebarVoluntario />

      <div className="content-area">
        <NavbarVoluntario
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          usuario={usuario}
        />

        <main className="main-content">
          <h2 className="dashboard-title">Eventos Disponibles</h2>
          <p className="dashboard-sub">
            Aquí puedes ver los voluntariados y actividades activas del sistema.
          </p>

          <section className="dashboard">
            {eventos.length > 0 ? (
              eventos.map((ev, i) => (
                <BlogCard
                  key={i}
                  category={ev.ubicacion || "Evento"}
                  title={ev.nombre}
                  desc={ev.descripcion_corta}
                  author={ev.empresa_nombre || "Empresa"}
                  avatar="/img/default-avatar.png"
                  comments={ev.solicitudes || 0}
                  views={ev.vistas || 0}
                />
              ))
            ) : (
              <p className="no-events">No hay eventos disponibles.</p>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default PaginaPrincipalVoluntario;

