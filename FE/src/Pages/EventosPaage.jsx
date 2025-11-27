import { useEffect, useState } from "react";
import Sidebar from "../Components/Empresa/PaginaPrincipalE/Sidebar";
import Navbar from "../Components/Empresa/PaginaPrincipalE/Navbar";
import { getData, postData } from "../Services/Fetch";
import "../style/Eventos.css";

function EventosPage() {
  const [eventos, setEventos] = useState([]);
  const [formVisible, setFormVisible] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    descripcion_corta: "",
    descripcion_larga: "",
    fecha_inicio: "",
    fecha_fin: "",
    ubicacion: "",
    voluntario: 1, // Ajustar según tu lógica
    empresa: localStorage.getItem("idEmpresa") || 1,
  });

  useEffect(() => {
    cargarEventos();
  }, []);

  async function cargarEventos() {
    const data = await getData("voluntariados/");
    setEventos(data);
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function crearEvento(e) {
    e.preventDefault();

    await postData("voluntariados/crear/", formData);
    setFormVisible(false);
    cargarEventos();

    // Limpiar formulario
    setFormData({
      nombre: "",
      descripcion_corta: "",
      descripcion_larga: "",
      fecha_inicio: "",
      fecha_fin: "",
      ubicacion: "",
      voluntario: 1,
      empresa: localStorage.getItem("idEmpresa") || 1,
    });
  }

  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <h2>Eventos</h2>

        <button className="agregar-btn" onClick={() => setFormVisible(!formVisible)}>
          + Agregar Evento
        </button>

        {formVisible && (
          <form className="form-card" onSubmit={crearEvento}>
            <h3>Crear Voluntariado</h3>

            <input
              type="text"
              name="nombre"
              placeholder="Nombre del voluntariado"
              value={formData.nombre}
              onChange={handleChange}
              required
            />

            <textarea
              name="descripcion_corta"
              placeholder="Descripción corta"
              value={formData.descripcion_corta}
              onChange={handleChange}
              required
            />

            <textarea
              name="descripcion_larga"
              placeholder="Descripción larga"
              value={formData.descripcion_larga}
              onChange={handleChange}
              required
            />

            <label>Fecha inicio:</label>
            <input
              type="date"
              name="fecha_inicio"
              value={formData.fecha_inicio}
              onChange={handleChange}
              required
            />

            <label>Fecha fin:</label>
            <input
              type="date"
              name="fecha_fin"
              value={formData.fecha_fin}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="ubicacion"
              placeholder="Ubicación"
              value={formData.ubicacion}
              onChange={handleChange}
              required
            />

            <button type="submit" className="guardar-btn">
              Guardar
            </button>
          </form>
        )}

        <div className="evento-lista">
          {eventos.map((ev) => (
            <div key={ev.id} className="card">
              <h3>{ev.nombre}</h3>
              <p>{ev.descripcion_corta}</p>

              <p><strong>Inicio:</strong> {ev.fecha_inicio}</p>
              <p><strong>Fin:</strong> {ev.fecha_fin}</p>
              <p><strong>Ubicación:</strong> {ev.ubicacion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventosPage;

