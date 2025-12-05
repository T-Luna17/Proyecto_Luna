import { FaSearch, FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";

function Navbar({ darkMode, setDarkMode, usuario, onSearch }) {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const handleInputChange = (e) => {
    setTexto(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(texto);
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <FaSearch
          className="navbar-icon"
          onClick={handleSearchClick}
          style={{ cursor: "pointer" }}
        />

        <input
          type="text"
          placeholder="Buscar..."
          value={texto}
          onChange={handleInputChange}
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
          {usuario?.nombre || "Usuario"}
        </span>
      </div>
    </header>
  );
}

export default Navbar;

