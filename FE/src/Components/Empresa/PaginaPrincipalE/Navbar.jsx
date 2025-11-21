import { FaSearch, FaBell, FaMoon, FaSun } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode, usuario }) {
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

        {/* FOTO DEL USUARIO COMO ENLACE AL PERFIL */}
        <a href={`../PerfilEmpresa`}>
          <img
            src={usuario?.foto || "/default-user.png"}
            alt="user"
            className="navbar-avatar"
          />
        </a>

        {/* NOMBRE DINÁMICO */}
        <span className="navbar-name">
          {usuario?.nombre || "Usuario"}
        </span>
      </div>
    </header>
  );
}

export default Navbar;
