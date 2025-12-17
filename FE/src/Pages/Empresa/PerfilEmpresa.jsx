import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Empresa/PaginaPrincipalE/Sidebar";
import Navbar from "../../Components/Empresa/PaginaPrincipalE/Navbar";
import PerfilEmpresa from "../../Components/Empresa/PerfilEmpresa";
import "../../Style/Perfil.css";
import "../../Style/Principal.css";

function PerfilEmpresaPage() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem("empresaData"));
  const idEmpresa = usuario?.id || localStorage.getItem("idEmpresa");

  useEffect(() => {
    if (!usuario) {
      navigate("/SesionEmpresa");
    }
  }, [usuario, navigate]);

  // Modo oscuro
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          usuario={usuario}
        />

        <PerfilEmpresa idEmpresa={idEmpresa} />
      </div>
    </div>
  );
}

export default PerfilEmpresaPage;
