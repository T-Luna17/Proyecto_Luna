function BlogCard({
  nombre,
  descripcion_corta,
  descripcion_larga,
  fecha_inicio,
  fecha_fin,
  ubicacion,
  imagen
}) {
  return (
    <div className="blog-card">
      {imagen && (
        <img src={imagen} alt={nombre} className="blog-image" />
      )}

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
  );
}

export default BlogCard;
