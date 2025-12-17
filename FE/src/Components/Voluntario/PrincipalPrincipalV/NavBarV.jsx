import {  FaMoon, FaSun, FaSignOutAlt } from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NavbarVoluntario({ darkMode, setDarkMode, usuario }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const handleLogout = () => {
    // Limpia sesión (ajusta según tu auth)
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");

    navigate("/");
  };

  return (
    <header className="navbar">

      <div className="navbar-right">
        <button
          className="dark-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Cambiar tema"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <span className="navbar-name">
          {usuario?.nombre || "Usuario"}
        </span>

        <button
          className="logout-btn"
          onClick={handleLogout}
          aria-label="Cerrar sesión"
          title="Cerrar sesión"
        >
          <FaSignOutAlt />
        </button>
      </div>
    </header>
  );
}

export default NavbarVoluntario;

