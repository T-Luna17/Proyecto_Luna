import { useState } from "react";
import { postData } from "../../../Services/Fetch";

function BlogCardVoluntario({
  idVoluntariado,
  category,
  title,
  desc,
  author,
  imagen_url
}) {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleInscribir = async () => {
    try {
      setLoading(true);
      setMsg("");

      // Obtener id del usuario logueado
      const idUsuario = Number(localStorage.getItem("idUsuario"));

      if (!idUsuario) {
        setMsg("Usuario no válido. Inicia sesión nuevamente.");
        return;
      }

      // Llamada correcta al backend
      await postData("voluntariados/inscribir/", {
        voluntariado: idVoluntariado,
        usuario: idUsuario
      });

      setMsg("¡Inscripción exitosa!");
    } catch (error) {
      console.error(error);
      setMsg("No se pudo completar la inscripción");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="blog-card">
      {imagen_url && (
        <img
          src={imagen_url}
          alt={title}
          className="blog-image"
        />
      )}

      <p className="blog-category">{category}</p>

      <h3 className="blog-title">{title}</h3>

      <p className="blog-desc">{desc}</p>

      <div className="blog-footer">
        <span className="blog-author">{author}</span>

        <button
          className="btn-inscribir"
          onClick={handleInscribir}
          disabled={loading}
        >
          {loading ? "Inscribiendo..." : "Inscribirse"}
        </button>
      </div>

      {msg && <p className="message">{msg}</p>}
    </div>
  );
}

export default BlogCardVoluntario;



