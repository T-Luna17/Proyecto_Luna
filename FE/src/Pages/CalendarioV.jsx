import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SidebarVoluntario from "../Components/Voluntario/PrincipalPrincipalV/SideBarV";
import NavbarVoluntario from "../Components/Voluntario/PrincipalPrincipalV/NavBarV";
import { getData } from "../Services/Fetch";
 
function CalendarioVoluntario({ darkMode }) {
  const [date, setDate] = useState(new Date());
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const data = await getData("ver-voluntarios/");
        setEventos(data);
      } catch (err) {
        console.error("Error cargando eventos", err);
      }
    };
    fetchEventos();
  }, []);

  const colores = {
    ambiental: "#4CAF50",
    social: "#2196F3",
    salud: "#FF9800",
    educacion: "#9C27B0",
    otro: "#AAAAAA"
  };

  const formatDate = (d) => d.toISOString().split("T")[0];

  // 📌 EVENTOS DEL DÍA SELECCIONADO
  const eventosDelDia = eventos.filter(
    (e) => e.fecha === formatDate(date)
  );

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <SidebarVoluntario />

      <div className="main-content">
        <NavbarVoluntario />

        <h2 className="page-title">Mi Calendario</h2>
        <p className="page-desc">Consulta los eventos disponibles que coinciden con tu fecha seleccionada.</p>

        <div className="calendar-layout">
          
          {/* === CALENDARIO === */}
          <div className="calendar-wrapper">
            <Calendar
              onChange={setDate}
              value={date}
              className="calendar-custom"

              tileClassName={({ date }) => {
                const fecha = formatDate(date);
                const evento = eventos.find((e) => e.fecha === fecha);

                if (!evento) return "";

                return "dia-evento-general";
              }}

              tileContent={({ date }) => {
                const fecha = formatDate(date);
                const evento = eventos.find((e) => e.fecha === fecha);

                return evento ? (
                  <div
                    className="dot"
                    style={{
                      background: colores[evento.categoria] || colores.otro
                    }}
                  ></div>
                ) : null;
              }}
            />
          </div>

          {/* === PANEL DE EVENTOS === */}
          <div className="info-panel">
            <h3 className="info-title">Eventos del día</h3>

            {eventosDelDia.length === 0 ? (
              <p className="info-empty">No hay eventos en esta fecha.</p>
            ) : (
              eventosDelDia.map((e, i) => (
                <div key={i} className="info-card">
                  <h4>{e.nombre}</h4>
                  <p><strong>Lugar:</strong> {e.lugar}</p>

                  <p>
                    <strong>Categoría:</strong>{" "}
                    <span
                      style={{
                        color: colores[e.categoria] || colores.otro,
                        fontWeight: "bold"
                      }}
                    >
                      {e.categoria}
                    </span>
                  </p>

                  <button className="event-btn">Ver más</button>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default CalendarioVoluntario;

