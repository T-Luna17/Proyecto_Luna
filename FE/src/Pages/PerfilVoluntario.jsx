import Sidebar from "../Components/Voluntario/PrincipalPrincipalV/SideBarV"; 
import Navbar from "../Components/Voluntario/PrincipalPrincipalV/NavBarV";   
import PerfilUsuario from "../Components/Voluntario/PerfilUsuario"; 
import "../Style/Perfil.css";
import "../Style/Principal.css"

function PerfilUsuarioPage() {
    const idUsuario = localStorage.getItem("idUsuario");    

    return (
        <div className="app-container">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <PerfilUsuario idUsuario={idUsuario} />
            </div>
        </div>
    );
}

export default PerfilUsuarioPage;
