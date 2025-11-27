import { FaHome, FaCalendarAlt, FaUsers, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">

      <h1 className="sidebar-title">Volunify</h1>

      <nav className="sidebar-nav">

        <button className="sidebar-btn" onClick={() => navigate("/CalendarioE")}>
          <FaCalendarAlt className="sidebar-icon" /> Calendario
        </button>

        <button className="sidebar-btn" onClick={() => navigate("/EventosEmpresa")}>
          <FaHome className="sidebar-icon" /> Eventos
        </button>

        <button className="sidebar-btn" onClick={() => navigate("/Voluntarios")}>
          <FaUsers className="sidebar-icon" /> Voluntarios
        </button>
      </nav>

      <div className="sidebar-profile-mini" onClick={() => navigate("/PerfilEmpresa")}>
        <FaUserCircle className="sidebar-profile-icon" />
        <span>Perfil</span>
      </div>

    </aside>
  );
}

export default Sidebar;
