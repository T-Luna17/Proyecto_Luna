import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Empresa/PaginaPrincipalE/Sidebar";
import Navbar from "../components/Empresa/PaginaPrincipalE/Navbar";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { getData } from "../services/fetch"; // tu función para traer datos

function CalendarPage() {
  const [eventos, setEventos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchEventos() {
      const data = await getData("eventos/"); // AJUSTA la ruta de tu API
      setEventos(data);
    }
    fetchEventos();
  }, []);

  // 🟢 Verifica si una fecha tiene un evento
  const eventosByDate = {};
  eventos.forEach(ev => {
    const fecha = ev.fecha.split("T")[0]; // "YYYY-MM-DD"
    if (!eventosByDate[fecha]) eventosByDate[fecha] = [];
    eventosByDate[fecha].push(ev);
  });

  // Click en un día
  const handleClickDay = (date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const key = `${yyyy}-${mm}-${dd}`;

    if (eventosByDate[key]) {
      // si hay más de uno, podríamos abrir lista, pero por ahora abrimos el 1°
      const evento = eventosByDate[key][0];
      navigate(`/evento/${evento.id}`);
    }
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />

        <h2>Calendario de Eventos</h2>

        <Calendar
          className="calendar-widget"
          onClickDay={handleClickDay}
          tileContent={({ date }) => {
            const yyyy = date.getFullYear();
            const mm = String(date.getMonth() + 1).padStart(2, "0");
            const dd = String(date.getDate()).padStart(2, "0");
            const key = `${yyyy}-${mm}-${dd}`;

            // Si hay evento → mostramos punto verde
            if (eventosByDate[key]) {
              return (
                <div
                  style={{
                    marginTop: "4px",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "green",
                    marginInline: "auto",
                  }}
                ></div>
              );
            }
            return null;
          }}
        />
      </div>
    </div>
  );
}

export default CalendarPage;
