import { FaHome, FaCalendarAlt, FaUsers } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="sidebar-title">Volunify</h1>
      <nav className="sidebar-nav">
        <button className="sidebar-btn">
          <FaHome className="sidebar-icon" /> Dashboard
        </button>
        <button className="sidebar-btn">
          <FaCalendarAlt className="sidebar-icon" /> Eventos
        </button>
        <button className="sidebar-btn">
          <FaUsers className="sidebar-icon" /> Voluntarios
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar