import Sidebar from "../../Components/Empresa/PaginaPrincipalE/Sidebar";
import Navbar from "../../Components/Empresa/PaginaPrincipalE/Navbar";
import PerfilEmpresa from "../../Components/Empresa/PerfilEmpresa";
import "../../Style/Perfil.css";
import "../../Style/Principal.css"

function PerfilEmpresaPage() {
    const idEmpresa = localStorage.getItem("idEmpresa");

    return (
        <div className="app-container">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <PerfilEmpresa idEmpresa={idEmpresa} />
            </div>
        </div>
    );
}

export default PerfilEmpresaPage;