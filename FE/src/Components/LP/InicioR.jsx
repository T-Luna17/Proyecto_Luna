import { useNavigate } from "react-router-dom"
const InicioR = () => {
    const navigate = useNavigate()
    return (
        <div className="inicio-container">
    <h1>Hola, Bienvenid@</h1>
    <br />
    <p>Elige tu tipo de acceso:</p>
    <div>
        <div className="acceso-card">
            <h2>¿Eres un Usuario?</h2>
            <button onClick={() => navigate("/SesionVoluntario")}>Iniciar Sesión</button>
            <button onClick={() => navigate("/RegistroVoluntario")}>Registrarse</button>
        </div>
        <hr />
        <div className="acceso-card">
            <h2>¿Eres una Empresa?</h2>
            <button onClick={() => navigate("/SesionEmpresa")}>Iniciar Sesión</button>
            <button onClick={() => navigate("/RegistroEmpresa")}>Registrarse</button>
        </div>
    </div>
</div>

    )
}
export default InicioR