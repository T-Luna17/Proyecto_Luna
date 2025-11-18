import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { postData } from "../../../Services/Fetch"

const SesionE = () => {
  const [correo, setCorreo] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault() 
    setError("")
    setLoading(true)

    if (!correo || !password) {
      setError("Por favor completa todos los campos")
      setLoading(false)
      return
    }

    try {
      const loginData = {
        correo_contacto: correo,
        password: password,
      }
      const response = await postData("empresas/login-empresa/", loginData)
      console.log("Login empresa response:", response)

      if (response && response.id) {
        navigate(`/perfil/empresa/${response.id}`)
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
    <div id="login-empresa">
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="form-title">
          Inicio de Sesión - <span className="accent">Voluntify</span>
        </h2>

        {error && <div className="error-message">{error}</div>}

        <label className="form-label">Correo de contacto:</label>
        <input
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="correo@empresa.com"
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

        <p className="register-text">
          ¿No tienes empresa registrada?{" "}
          <a href="/RegistroEmpresa" className="register-link">
            Regístrate aquí
          </a>
        </p>
      </form>
    </div>
  )
}

export default SesionE