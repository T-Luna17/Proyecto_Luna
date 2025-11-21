import { useState, useEffect } from "react";
import Sidebar from "../components/Empresa/PaginaPrincipalE/Sidebar";
import Navbar from "../components/Empresa/PaginaPrincipalE/Navbar";
import Dashboard from "../components/Empresa/PaginaPrincipalE/Dashboard";
import "../style/Principal.css";

function PrincipalE() {
  const [darkMode, setDarkMode] = useState(false);

  // Cargar datos del usuario desde localStorage
  const usuario = JSON.parse(localStorage.getItem("empresaData"));

  // Manejo del modo oscuro
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className="app-container">
      <Sidebar />
      
      <div className="main-content">
        {/* Navbar dinámico */}
        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          usuario={usuario}
        />

        <Dashboard />
      </div>
    </div>
  );
}

export default PrincipalE;
