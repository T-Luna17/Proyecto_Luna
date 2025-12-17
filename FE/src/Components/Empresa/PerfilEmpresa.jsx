import { useEffect, useState } from "react";
import { getData, putData } from "../../Services/Fetch";

const PerfilEmpresa = ({ idEmpresa }) => {
  const [empresa, setEmpresa] = useState(null);
  const [form, setForm] = useState({});
  const [editando, setEditando] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchEmpresa() {
      try {
        const empresaData = JSON.parse(localStorage.getItem("empresaData"));
        const data = await getData(`/empresas/perfil/${empresaData.id}/`);

        if (!data || data.detail) {
          setError("No se pudo cargar la información de la empresa.");
        } else {
          setEmpresa(data);
          setForm(data); // copiar datos al formulario
        }
      } catch (err) {
        setError("Error al cargar el perfil.");
      }
    }

    if (idEmpresa) fetchEmpresa();
  }, [idEmpresa]);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function guardarCambios() {
    try {
      setLoading(true);
      const empresaData = JSON.parse(localStorage.getItem("empresaData"));

      const updated = await putData(
        `/empresas/editar/${empresaData.id}/`,
        form
      );

      setEmpresa(updated);
      setEditando(false);
    } catch (err) {
      setError("Error al guardar los cambios.");
    } finally {
      setLoading(false);
    }
  }

  if (error) return <p className="error-msg">{error}</p>;
  if (!empresa) return <p className="loading-msg">Cargando perfil...</p>;

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <h2 className="perfil-titulo">{empresa.nombre}</h2>

        {!editando ? (
          <button className="perfil-edit-btn" onClick={() => setEditando(true)}>
            Editar
          </button>
        ) : (
          <div className="perfil-actions">
            <button
              className="perfil-save-btn"
              onClick={guardarCambios}
              disabled={loading}
            >
              {loading ? "Guardando..." : "Guardar"}
            </button>
            <button
              className="perfil-cancel-btn"
              onClick={() => {
                setForm(empresa);
                setEditando(false);
              }}
            >
              Cancelar
            </button>
          </div>
        )}
      </div>

      <div className="perfil-info">
        <label>Descripción</label>
        {editando ? (
          <textarea
            name="descripcion"
            value={form.descripcion || ""}
            onChange={handleChange}
          />
        ) : (
          <p>{empresa.descripcion || "Sin descripción"}</p>
        )}

        <label>Teléfono</label>
        {editando ? (
          <input
            name="telefono"
            value={form.telefono || ""}
            onChange={handleChange}
          />
        ) : (
          <p>{empresa.telefono || "No disponible"}</p>
        )}

        <label>Correo</label>
        <p>{empresa.correo_contacto}</p>

        <label>Dirección</label>
        {editando ? (
          <input
            name="direccion"
            value={form.direccion || ""}
            onChange={handleChange}
          />
        ) : (
          <p>{empresa.direccion || "No especificada"}</p>
        )}

        <label>Sitio web</label>
        {editando ? (
          <input
            name="sitio_web"
            value={form.sitio_web || ""}
            onChange={handleChange}
          />
        ) : empresa.sitio_web ? (
          <a href={empresa.sitio_web} target="_blank" rel="noreferrer">
            {empresa.sitio_web}
          </a>
        ) : (
          <p>No especificado</p>
        )}
      </div>
    </div>
  );
};

export default PerfilEmpresa;
