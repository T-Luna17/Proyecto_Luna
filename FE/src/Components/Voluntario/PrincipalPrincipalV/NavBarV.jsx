import { FaSearch, FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

function NavbarVoluntario({ darkMode, setDarkMode, usuario, onSearch }) {
  const [texto, setTexto] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setTexto(value);
    onSearch(value);
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <FaSearch className="navbar-icon" />
        <input
          type="text"
          placeholder="Buscar actividades..."
          value={texto}
          onChange={handleSearch}
          className="navbar-input"
        />
      </div>

      <div className="navbar-right">
        <button
          className="dark-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Cambiar tema"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <span className="navbar-name">
          {usuario?.nombre || "usuario"}
        </span>
      </div>
    </header>
  );
}

export default NavbarVoluntario;
