import { useEffect, useState } from "react";
import SidebarVoluntario from "../Components/Voluntario/PrincipalPrincipalV/SideBarV";
import NavbarVoluntario from "../Components/Voluntario/PrincipalPrincipalV/NavBarV";
import BlogCard from "../Components/Voluntario/PrincipalPrincipalV/BlogCardV"; 
import { getData } from "../Services/Fetch"; 
import "../Style/Principal.css"

function PaginaPrincipalVoluntario() {
  const [darkMode, setDarkMode] = useState(false);
  const [eventos, setEventos] = useState([]);
  const [filteredEventos, setFilteredEventos] = useState([]);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    async function getEventos() {
      try {
        const data = await getData("voluntariados/voluntariados/"); 
        console.log("Eventos backend:", data);
        setEventos(data);
        setFilteredEventos(data);
      } catch (error) {
        console.error("Error cargando eventos:", error);
      }
    }
    getEventos();
  }, []);

  const handleSearch = (texto) => {
    if (!texto.trim()) {
      setFilteredEventos(eventos);
      return;
    }

    const filtrados = eventos.filter((ev) =>
      ev.nombre.toLowerCase().includes(texto.toLowerCase())
    );

    setFilteredEventos(filtrados);
  };

  useEffect(() => {
    const saved = localStorage.getItem("usuario");
    if (saved) setUsuario(JSON.parse(saved));
  }, []);

  return (
    <div className={darkMode ? "app-container dark" : "app-container"}>
      
      <SidebarVoluntario />

      <div className="main-content">
        <NavbarVoluntario
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          usuario={usuario}
          onSearch={handleSearch}
        />

        <h2 className="dashboard-title">Eventos Disponibles</h2>
        <p className="dashboard-sub">
          Aquí puedes ver los voluntariados y actividades activas del sistema.
        </p>

        <main className="dashboard">
          {filteredEventos.length > 0 ? (
            filteredEventos.map((ev, i) => (
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
        </main>
      </div>

    </div>
  );
}

export default PaginaPrincipalVoluntario;
