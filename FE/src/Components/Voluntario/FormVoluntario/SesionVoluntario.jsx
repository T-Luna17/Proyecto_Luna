import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { postData } from "../../../Services/Fetch"

const SesionV = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleLogin(e) {
        e.preventDefault()
        setError("")
        setLoading(true)

        if (!username || !password) {
            setError("Por favor completa todos los campos")
            setLoading(false)
            return
        }

        try {
            const loginData = { username, password }
            const response = await postData("usuarios/validar-usuario", loginData)
            if (response && response.id) {
                navigate(`/pagina-principal`)
            } else {
                setError("Credenciales inválidas")
            }
        } catch (err) {
            console.error("Error en login:", err)
            setError(err.message || "Error al iniciar sesión. Verifica tus credenciales.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div id="login-usuario">
            <form onSubmit={handleLogin}>
                <h2 className="form-title">Inicio de Sesión - Usuario</h2>

                {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}

                <label className="form-label">Nombre de usuario:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Tu nombre de usuario"
                    required
                    className="form-input"
                />

                <label className="form-label">Contraseña:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••"
                    required
                    className="form-input"
                />

                <button className="form-button" type="submit" disabled={loading}>
                    {loading ? "Iniciando sesión..." : "Ingresar"}
                </button>

                <p>¿No tienes cuenta? <a href="/RegistroVoluntario">Regístrate aquí</a></p>
            </form>
        </div>
    )
}

export default SesionV