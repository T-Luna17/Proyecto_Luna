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

      const idUsuario = localStorage.getItem("idUsuario");

      const response = await postData("voluntariados/voluntariados/inscribir/", {
        voluntariado: idVoluntariado,
        usuario: idUsuario,
        fecha : new Date().toISOString()
      });

      if (!response || response.detail || response.error) {
        throw new Error("Error en la inscripción");
      }

      setMsg("¡Inscripción exitosa!");
    } catch (error) {
      console.error(error);
      setMsg("Error al inscribirse al voluntariado");
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


