import { useState, useEffect } from "react";
import Sidebar from "../components/Empresa/PaginaPrincipalE/Sidebar";
import Navbar from "../components/Empresa/PaginaPrincipalE/Navbar";
import Dashboard from "../components/Empresa/PaginaPrincipalE/Dashboard";
import "../style/Principal.css"

function PrincipalE() {
  const [darkMode, setDarkMode] = useState(false);

  // Cambia la clase del body cuando cambia el modo
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Dashboard />
      </div>
    </div>
  );
}

export default PrincipalE;