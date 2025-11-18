import { useState } from "react"
import { postData } from "../../../Services/Fetch"

const FormRegistroV = () => {
    const [nombreUsuario, setNombreUsuario] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [clave, setClave] = useState("")
    const [email, setEmail] = useState("")
    const [numCedula, setNumCedula] = useState("")
    const [direccion, setDireccion] = useState("")
    const [numTelefono, setNumTelefono] = useState("")
    const [fechaNacimiento, setFechaNacimiento] = useState("")
    const [genero, setGenero] = useState("")


    async function agregarUsuario() {
        const objUsuario = {
            "username": nombreUsuario,
            "first_name": nombre,
            "last_name": apellidos,
            "password": clave,
            "email": email,
            "num_cedula": numCedula,
            "direccion": direccion,
            "num_telefono": numTelefono,
            "fecha_nacimiento": fechaNacimiento,
            "genero": genero
        }
        const peticion = await postData("usuarios/register-usuario", objUsuario)
        console.log(peticion);
        
    }

    return (
        <div className="container">
            <form id="form-registro">
                <h2 className="form-title">Registro de Usuario</h2>
                <label className="form-label">Nombre de usuario:</label>
                <br />
                <input
                    type="text"
                    name="username"
                    required
                    className="form-input"
                    onChange={(e) => setNombreUsuario(e.target.value)}
                />
                <br />
                <br />
                <label className="form-label">Nombre:</label>
                <br />
                <input
                    type="text"
                    name="first_name"
                    required
                    className="form-input"
                    onChange={(e) => setNombre(e.target.value)}
                />
                <br />
                <br />
                <label className="form-label">Apellidos:</label>
                <br />
                <input
                    type="text"
                    name="last_name"
                    required
                    className="form-input"
                    onChange={(e) => setApellidos(e.target.value)}
                />
                <br />
                <br />
                <label className="form-label">Contraseña:</label>
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder="••••••••••"
                    required
                    className="form-input"
                    onChange={(e) => setClave(e.target.value)}
                />
                <br />
                <br />
                <label className="form-label">Correo electrónico:</label>
                <br />
                <input
                    type="email"
                    name="email"
                    required
                    className="form-input"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <label className="form-label">Número de cédula:</label>
                <br />
                <input
                    type="text"
                    name="num_cedula"
                    required
                    className="form-input"
                    onChange={(e) => setNumCedula(e.target.value)}
                />
                <br />
                <br />
                <label className="form-label">Dirección:</label>
                <br />
                <textarea
                    name="direccion"
                    rows={2}
                    cols={40}
                    required
                    className="form-textarea"
                    onChange={(e) => setDireccion(e.target.value)}
                />
                <br />
                <br />
                <label className="form-label">Número de teléfono:</label>
                <br />
                <input
                    type="tel"
                    name="num_telefono"
                    required
                    className="form-input"
                    onChange={(e) => setNumTelefono(e.target.value)}
                />
                <br />
                <br />
                <label className="form-label">Fecha de nacimiento:</label>
                <br />
                <input
                    type="date"
                    name="fecha_nacimiento"
                    required
                    className="form-input"
                    onChange={(e) => setFechaNacimiento(e.target.value)}
                />
                <br />
                <br />
                <label className="form-label">Género:</label>
                <br />
                <select name="genero" required className="form-input" onChange={(e) => setGenero(e.target.value)}>
                    <option value="Masculino" defaultValue>
                        Masculino
                    </option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                </select>
                <br />
                <br />
                <button className="form-button" onClick={agregarUsuario} type="button">Registrar</button>
            </form>
        </div>
    )
}
export default FormRegistroV