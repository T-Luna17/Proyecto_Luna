const PerfilTabs = ({ tab, setTab }) => {
  return (
    <div className="perfil-tabs">
      <button
        className={tab === "info" ? "active" : ""}
        onClick={() => setTab("info")}
      >
        Información
      </button>

      <button
        className={tab === "eventos" ? "active" : ""}
        onClick={() => setTab("eventos")}
      >
        Eventos
      </button>

      <button
        className={tab === "voluntarios" ? "active" : ""}
        onClick={() => setTab("voluntarios")}
      >
        Voluntarios
      </button>
    </div>
  );
};

export default PerfilTabs;
