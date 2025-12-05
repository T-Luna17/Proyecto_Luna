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
      
        <button className="sidebar-btn" onClick={() => navigate("/PerfilEmpresa")}>
          <FaUserCircle className="sidebar-profile-icon" /> Perfil
        </button>

      </nav>
    </aside>
  );
}

export default Sidebar;
