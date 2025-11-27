import { FaHome, FaCalendarAlt, FaHandsHelping, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SidebarVoluntario() {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">

      <h1 className="sidebar-title">Volunify</h1>

      <nav className="sidebar-nav">

        <button className="sidebar-btn" onClick={() => navigate("/CalendarioVoluntario")}>
          <FaCalendarAlt className="sidebar-icon" /> Calendario
        </button>

        <button className="sidebar-btn" onClick={() => navigate("/MisActividades")}>
          <FaHandsHelping className="sidebar-icon" /> Mis Actividades
        </button>

        <button className="sidebar-btn" onClick={() => navigate("/Eventos")}>
          <FaHome className="sidebar-icon" /> Eventos
        </button>
      </nav>

      <div className="sidebar-profile-mini" onClick={() => navigate("/PerfilVoluntario")}>
        <FaUserCircle className="sidebar-profile-icon" />
        <span>Perfil</span>
      </div>

    </aside>
  );
}

export default SidebarVoluntario;
