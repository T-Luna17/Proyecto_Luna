import { useState } from "react"
import { postData } from "../../../Services/Fetch"

const FormEmpresa = () => {
  const [nombre, setNombre] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [telefono, setTelefono] = useState("")
  const [direccion, setDireccion] = useState("")
  const [correo, setCorreo] = useState("")
  const [sitioWeb, setSitioWeb] = useState("")
  const [usuario, setUsuario] = useState("") 
  const [clave, setClave] = useState("")

  async function registrarEmpresa() {
    const objEmpresa = {
      usuario: usuario,
      nombre: nombre,
      descripcion: descripcion,
      telefono: telefono,
      direccion: direccion,
      correo_contacto: correo,
      sitio_web: sitioWeb,
      password : clave,
    }

    const peticion = await postData("usuarios/empresa/", objEmpresa)
    console.log(peticion)
  }

  return (
    <div className="container">
      <form id="form-empresa">
        <h2 className="form-title">Registro de Empresa</h2>

        <div className="form-group">
          <label className="form-label">Usuario (ID):</label>
          <input className="form-input" type="number" onChange={(e) => setUsuario(e.target.value)} />
        </div>

        <div className="form-group">
          <label className="form-label">Nombre de la empresa:</label>
          <input className="form-input" type="text" onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div className="form-group">
          <label className="form-label">Descripción:</label>
          <textarea className="form-textarea" onChange={(e) => setDescripcion(e.target.value)} />
        </div>

        <div className="form-group">
          <label className="form-label">Teléfono:</label>
          <input className="form-input" type="text" onChange={(e) => setTelefono(e.target.value)} />
        </div>

        <div className="form-group">
          <label className="form-label">Dirección:</label>
          <input className="form-input" type="text" onChange={(e) => setDireccion(e.target.value)} />
        </div>

        <div className="form-group">
          <label className="form-label">Correo de contacto:</label>
          <input className="form-input" type="email" onChange={(e) => setCorreo(e.target.value)} />
        </div>

        <div className="form-group">
          <label className="form-label">Sitio web:</label>
          <input
              className="form-input"
              type="url"
              placeholder="https://tusitio.com"
              onChange={(e) => setSitioWeb(e.target.value)}
           />
        </div>

        <div className="form-group">
          <label className="form-label">Contraseña:</label>
          <input
            className="form-input"
            type="password"
            placeholder="••••••••••"
            required
            onChange={(e) => setClave(e.target.value)}
          />
        </div>


        <button className="form-button" type="button" onClick={registrarEmpresa}>Registrar Empresa</button>
      </form>
    </div>
  )
}

export default FormEmpresa