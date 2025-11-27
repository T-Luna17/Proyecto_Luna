import Sidebar from "../components/Empresa/PaginaPrincipalE/Sidebar";
import Navbar from "../components/Empresa/PaginaPrincipalE/Navbar";
import PerfilContainer from "../Components/Empresa/PerfilEmpresa/PerfilContainer";
import "../Style/PerfilEmpresa.css"

function PerfilEmpresaPage() {
  const idEmpresa = localStorage.getItem("idEmpresa");

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <PerfilContainer idEmpresa={idEmpresa} />
      </div>
    </div>
  );
}

export default PerfilEmpresaPage;