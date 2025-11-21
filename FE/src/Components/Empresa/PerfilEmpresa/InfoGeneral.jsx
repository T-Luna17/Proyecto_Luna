const CardInfoGeneral = ({ nombre, descripcion }) => {
  return (
    <div className="card-perfil">
      <h2>{nombre}</h2>
      <p><strong>Descripción:</strong> {descripcion}</p>
    </div>
  );
};

export default CardInfoGeneral;
