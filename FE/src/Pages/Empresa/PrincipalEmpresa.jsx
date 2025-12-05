import { useState, useEffect } from "react";
import Sidebar from "../../Components/Empresa/PaginaPrincipalE/Sidebar";
import Navbar from "../../Components/Empresa/PaginaPrincipalE/Navbar";
import Dashboard from "../../Components/Empresa/PaginaPrincipalE/Dashboard";
import "../../Style/Principal.css";

function PrincipalE() {
  const [darkMode, setDarkMode] = useState(false);

  // Cargar datos del usuario desde localStorage
  const usuario = JSON.parse(localStorage.getItem("empresaData"));

  // Modo oscuro
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className="layout">
      <Sidebar />

      <div className="content-area">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          usuario={usuario}
        />

        <main className="main-content">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default PrincipalE;
