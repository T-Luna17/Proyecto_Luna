const CardContacto = ({ telefono, correo }) => {
  return (
    <div className="card-perfil">
      <h3>Información de Contacto</h3>
      <p><strong>Teléfono:</strong> {telefono}</p>
      <p><strong>Correo:</strong> {correo}</p>
    </div>
  );
};

export default CardContacto;
