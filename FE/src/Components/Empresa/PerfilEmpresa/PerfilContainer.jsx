import { useState, useEffect } from "react";
import { getData } from "../../../Services/Fetch";

import PerfilTabs from "./PerfilTabs";
import PerfilHeader from "./PerfilHeader";
import PerfilInfo from "./PerfilInfo";
import PerfilEventos from "./PerfilEventos";
import PerfilVoluntarios from "./PerfilVoluntarios";

const PerfilContainer = ({ idEmpresa }) => {
  const [tab, setTab] = useState("info");
  const [empresa, setEmpresa] = useState(null);

  useEffect(() => {
    async function fetchEmpresa() {
      const data = await getData(`usuarios/perfil/empresa/${idEmpresa}/`);
      setEmpresa(data);
    }
    fetchEmpresa();
  }, [idEmpresa]);

  if (!empresa) return <p>Cargando perfil...</p>;

  return (
    <div className="perfil-container">
      <PerfilHeader empresa={empresa} />

      <PerfilTabs tab={tab} setTab={setTab} />

      {tab === "info" && <PerfilInfo empresa={empresa} />}
      {tab === "eventos" && <PerfilEventos empresaId={idEmpresa} />}
      {tab === "voluntarios" && <PerfilVoluntarios empresaId={idEmpresa} />}
    </div>
  );
};

export default PerfilContainer;
