function BlogCard({
  nombre,
  descripcion_corta,
  descripcion_larga,
  fecha_inicio,
  fecha_fin,
  ubicacion,
  imagen_url
}) {
  return (
    <div className="blog-card">

      {imagen_url && (
        <img src={imagen_url} alt={nombre} className="blog-image" />
      )}

      <div className="blog-content">

        <h3 className="blog-title">{nombre}</h3>
        <p className="blog-desc">{descripcion_corta}</p>

        <div className="blog-info">
          <p><strong>Inicio:</strong> {fecha_inicio}</p>
          <p><strong>Fin:</strong> {fecha_fin}</p>
          <p><strong>Ubicación:</strong> {ubicacion}</p>
        </div>

        {descripcion_larga && (
          <p className="blog-desc-long">{descripcion_larga}</p>
        )}

      </div>

    </div>
  );
}

export default BlogCard;

