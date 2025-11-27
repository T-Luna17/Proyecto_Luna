const PerfilHeader = ({ empresa }) => {
  return (
    <div className="perfil-header">
      <img
        src={empresa.foto || "/default-user.png"}
        alt="empresa"
        className="perfil-header-img"
      />

      <div>
        <h2>{empresa.nombre}</h2>
        <p className="perfil-header-sub">{empresa.correo_contacto}</p>
      </div>
    </div>
  );
};

export default PerfilHeader;
