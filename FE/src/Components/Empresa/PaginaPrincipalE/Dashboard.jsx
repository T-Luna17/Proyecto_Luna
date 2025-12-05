import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { getData } from "../../../Services/Fetch"; 

function Dashboard() {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchEventos() {
      try {
        const data = await getData("voluntariados/voluntariados/");

        if (!data || data.detail) {
          setError("No se pudo cargar la lista de eventos.");
        } else {
          setEventos(data);
        }
      } catch (err) {
        console.error(err);
        setError("Error al obtener los eventos.");
      } finally {
        setLoading(false);
      }
    }

    fetchEventos();
  }, []);

  if (loading) return <p>Cargando eventos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="dashboard">
      {eventos.length === 0 ? (
        <p>No hay eventos creados aún.</p>
      ) : (
        eventos.map((ev) => (
          <BlogCard
            key={ev.id}
            nombre={ev.nombre}
            descripcion_corta={ev.descripcion_corta}
            descripcion_larga={ev.descripcion_larga}
            fecha_inicio={ev.fecha_inicio}
            fecha_fin={ev.fecha_fin}
            ubicacion={ev.ubicacion}
            imagen={ev.imagen}       
          />
        ))
      )}
    </main>
  );
}

export default Dashboard;
