import { useEffect, useState } from "react";
import Sidebar from "../../Components/Empresa/PaginaPrincipalE/Sidebar";
import Navbar from "../../Components/Empresa/PaginaPrincipalE/Navbar";
import { getData, postData, patchData, deleteData } from "../../Services/Fetch";
import "../../Style/Eventos.css";

function EventosPage() {
  const [eventos, setEventos] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [editId, setEditId] = useState(null); // 

  const usuario = JSON.parse(localStorage.getItem("empresaData"));

  const [formData, setFormData] = useState({
    nombre: "",
    descripcion_corta: "",
    descripcion_larga: "",
    fecha_inicio: "",
    fecha_fin: "",
    ubicacion: "",
    imagen_url: "",
    voluntario: 1,
    empresa: localStorage.getItem("idEmpresa") || 1,
  });

  async function cargarEventos() {
    const data = await getData("voluntariados/voluntariados/");
    setEventos(data);
  }

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);


  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (editId) {
      // ⭐ EDITAR EVENTO
      await patchData(`voluntariados/voluntariados/editar/${editId}/`, formData);
    } else {
      // ⭐ CREAR EVENTO
      await postData("voluntariados/voluntariados/crear/", formData);
    }

    // Limpiar todo
    setFormVisible(false);
    setEditId(null);
    setFormData({
      nombre: "",
      descripcion_corta: "",
      descripcion_larga: "",
      fecha_inicio: "",
      fecha_fin: "",
      ubicacion: "",
      imagen_url: "",
      voluntario: 1,
      empresa: localStorage.getItem("idEmpresa") || 1,
    });

    cargarEventos();
  }

  async function eliminarEvento(id) {
    if (!confirm("¿Seguro que deseas eliminar este evento?")) return;

    await deleteData(`voluntariados/voluntariados/eliminar/${id}/`);
    cargarEventos();
  }

  function editarEvento(ev) {
    setEditId(ev.id);
    setFormVisible(true);

    setFormData({
      nombre: ev.nombre,
      descripcion_corta: ev.descripcion_corta,
      descripcion_larga: ev.descripcion_larga,
      fecha_inicio: ev.fecha_inicio,
      fecha_fin: ev.fecha_fin,
      ubicacion: ev.ubicacion,
      imagen_url: ev.imagen_url,
      voluntario: 1,
      empresa: localStorage.getItem("idEmpresa") || 1,
    });
  }

  return (
    <div className="layout">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="content-area">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          usuario={usuario}
        />

        <div className="main-content">
          <h2>Eventos</h2>

          <button
            className="agregar-btn"
            onClick={() => {
              setFormVisible(!formVisible);
              setEditId(null); 
            }}
          >
            + Agregar Evento
          </button>

          {formVisible && (
            <form className="form-card" onSubmit={handleSubmit}>
              <h3>{editId ? "Editar Voluntariado" : "Crear Voluntariado"}</h3>

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

              <input
                type="text"
                name="imagen_url"
                placeholder="URL de la imagen"
                value={formData.imagen_url}
                onChange={handleChange}
              />

              <button type="submit" className="guardar-btn">
                {editId ? "Guardar Cambios" : "Crear Evento"}
              </button>
            </form>
          )}

          {/* =======================
              LISTA DE EVENTOS
             ======================= */}
          <div className="evento-lista">
            {eventos.map((ev) => (
              <div key={ev.id} className="evento-card">
                
                {ev.imagen_url && (
                  <img
                    src={ev.imagen_url}
                    alt={ev.nombre}
                    className="evento-img"
                  />
                )}

                <h3>{ev.nombre}</h3>
                <p>{ev.descripcion_corta}</p>

                <p><strong>Inicio:</strong> {ev.fecha_inicio}</p>
                <p><strong>Fin:</strong> {ev.fecha_fin}</p>
                <p><strong>Ubicación:</strong> {ev.ubicacion}</p>

                <div className="btn-group">
                  <button
                    className="btn-edit"
                    onClick={() => editarEvento(ev)}
                  >
                    ✏ Editar
                  </button>

                  <button
                    className="btn-delete"
                    onClick={() => eliminarEvento(ev.id)}
                  >
                    🗑 Eliminar
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventosPage;



