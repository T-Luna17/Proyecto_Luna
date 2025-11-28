import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SidebarVoluntario from "../Components/Voluntario/PrincipalPrincipalV/SideBarV";
import NavbarVoluntario from "../Components/Voluntario/PrincipalPrincipalV/NavBarV";
import { getData } from "../Services/Fetch";
import "../Style/CalendarioVoluntario.css";

function CalendarioVoluntario({ darkMode }) {
  const [date, setDate] = useState(new Date());
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const data = await getData("voluntariados/voluntariados/");
        setEventos(data);
      } catch (err) {
        console.error("Error cargando eventos", err);
      }
    };
    fetchEventos();
  }, []);

  const formatDate = (d) => d.toISOString().split("T")[0];

  const eventosDelDia = eventos.filter(
    (e) => e.fecha === formatDate(date)
  );

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <SidebarVoluntario />

      <div className="main-content">
        <NavbarVoluntario />

        <h2 className="page-title">Mi Calendario</h2>
        <p className="page-desc">
          Consulta los eventos disponibles según la fecha seleccionada.
        </p>

        <div className="calendar-layout">

          {/* CALENDARIO */}
          <div className="calendar-wrapper">
            <Calendar
              onChange={setDate}
              value={date}
              className="calendar-custom"
              tileClassName={({ date }) => {
                const fecha = formatDate(date);
                return eventos.some((e) => e.fecha === fecha)
                  ? "dia-evento-general"
                  : "";
              }}
              tileContent={({ date }) => {
                const fecha = formatDate(date);
                const evento = eventos.find((e) => e.fecha === fecha);

                return evento ? <div className="dot"></div> : null;
              }}
            />
          </div>

          {/* PANEL DE EVENTOS */}
          <div className="info-panel">
            <h3 className="info-title">Eventos del día</h3>

            {eventosDelDia.length === 0 ? (
              <p className="info-empty">No hay eventos en esta fecha.</p>
            ) : (
              eventosDelDia.map((e, i) => (
                <div key={i} className="info-card">
                  <h4>{e.nombre}</h4>
                  <p>
                    <strong>Lugar:</strong> {e.lugar}
                  </p>

                  <p>
                    <strong>Categoría:</strong>{" "}
                    <span className={`categoria categoria-${e.categoria}`}>
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


