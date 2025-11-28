import { useState } from "react";

function BlogCardVoluntario({ idVoluntariado, category, title, desc, author, avatar }) {
  
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleInscribir = async () => {
    try {
      setLoading(true);
      setMsg("");

      const idUsuario = localStorage.getItem("idUsuario"); 

      const response = await fetch(`/voluntariados/inscribir/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          voluntariado: idVoluntariado,
          usuario: idUsuario
        }),
      });

      if (!response.ok) {
        throw new Error("Error al inscribirse");
      }

      setMsg("¡Inscripción exitosa!");
    } catch (error) {
      setMsg("Error al inscribirse al voluntariado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="blog-card">
      <p className="blog-category">{category}</p>
      <h3 className="blog-title">{title}</h3>
      <p className="blog-desc">{desc}</p>

      <div className="blog-footer">
        <div className="blog-author">
          <img src={avatar} alt={author} className="blog-avatar" />
          <span>{author}</span>
        </div>

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

