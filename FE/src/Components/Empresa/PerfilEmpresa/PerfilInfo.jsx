const PerfilInfo = ({ empresa }) => {
  return (
    <div className="perfil-card">
      <h3>Información General</h3>

      <p><strong>Descripción:</strong> {empresa.descripcion}</p>
      <p><strong>Teléfono:</strong> {empresa.telefono}</p>
      <p><strong>Dirección:</strong> {empresa.direccion}</p>
      <p><strong>Sitio web:</strong> {empresa.sitio_web || "No especificado"}</p>
      <p><strong>Fecha de registro:</strong> {new Date(empresa.fecha_registro).toLocaleDateString()}</p>
    </div>
  );
};

export default PerfilInfo;
