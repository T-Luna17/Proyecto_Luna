import Sidebar from "../../Components/Voluntario/PrincipalPrincipalV/SideBarV"; 
import Navbar from "../../Components/Voluntario/PrincipalPrincipalV/NavBarV";   
import PerfilVoluntario from "../../Components/Voluntario/PerfilVoluntario"; 
import "../../Style/Perfil.css";
import "../../Style/Principal.css"

function PerfilUsuarioPage() {
    const idUsuario = localStorage.getItem("idUsuario");    

    return (
        <div className="app-container">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <PerfilVoluntario idUsuario={idUsuario} />
            </div>
        </div>
    );
}

export default PerfilUsuarioPage;
