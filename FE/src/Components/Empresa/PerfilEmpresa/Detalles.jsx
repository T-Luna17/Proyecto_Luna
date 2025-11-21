const CardDetalles = ({ direccion, sitio_web, fecha_registro }) => {
  return (
    <div className="card-perfil">
      <h3>Detalles Adicionales</h3>
      <p><strong>Dirección:</strong> {direccion}</p>
      <p><strong>Sitio web:</strong> {sitio_web || "No especificado"}</p>
      <p><strong>Fecha de Registro:</strong> 
        {" "}{fecha_registro ? new Date(fecha_registro).toLocaleDateString() : "-"}
      </p>
    </div>
  );
};

export default CardDetalles;
