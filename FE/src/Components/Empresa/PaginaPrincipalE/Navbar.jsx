import { FaSearch, FaBell, FaMoon, FaSun } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <FaSearch className="navbar-icon" />
        <input type="text" placeholder="Buscar..." className="navbar-input" />
      </div>

      <div className="navbar-right">
        <button
          className="dark-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Cambiar tema"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <FaBell className="navbar-icon" />
        <img
          src=""
          alt="user"
          className="navbar-avatar"
        />
        <span className="navbar-name">Tami Luna</span>
      </div>
    </header>
  );
}

export default Navbar