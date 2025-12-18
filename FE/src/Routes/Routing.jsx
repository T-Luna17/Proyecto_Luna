import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Lading from '../pages/Lading'
import Sobre from "../pages/SobreNosotros"
import InicioR from '../Components/LP/InicioR'
import PrincipalEmpresa from "../Pages/Empresa/PrincipalEmpresa"
import RegistroEmpresa from "../Pages/RegistroEmpresa"
import SesionEmpresa from "../Pages/SesionEmpresa"
import RegistroVoluntario from "../Pages/RegistroVoluntario"
import SesionVoluntario from "../Pages/SesionVoluntario"
import PerfilEmpresa from "../Pages/Empresa/PerfilEmpresa"
import CalendarioE from '../Pages/Empresa/CalendarPage'
import EventosEmpresa from "../Pages/Empresa/EventosPaage"
import Voluntarios from "../Pages/Empresa/VoluntarioPages"
import PaginaPrincipalVoluntario from '../Pages/Voluntario/PrincipalVoluntario'
import CalendarioVoluntario from "../Pages/Voluntario/CalendarioV"
import PerfilVoluntario from "../Pages/Voluntario/PerfilVoluntario"

const Routing = ()=>{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Lading/>}/>
                <Route path='/Sobre' element={<Sobre/>}/>
                <Route path='/InicioR' element={<InicioR/>}/>
                <Route path='/PrincipalEmpresa' element={<PrincipalEmpresa/>}/>
                <Route path='/PerfilEmpresa' element ={<PerfilEmpresa/>}/>
                <Route path='/RegistroEmpresa' element={<RegistroEmpresa/>}/>
                <Route path='/SesionEmpresa' element={<SesionEmpresa/>}/>
                <Route path='/RegistroVoluntario' element={<RegistroVoluntario/>}/>
                <Route path='/SesionVoluntario' element={<SesionVoluntario/>}/>
                <Route path='/CalendarioE' element={<CalendarioE/>}/>
                <Route path='/EventosEmpresa' element={<EventosEmpresa/>}/>
                <Route path='/Voluntarios' element={<Voluntarios/>}/>
                <Route path='/PaginaPrincipalVoluntario' element={<PaginaPrincipalVoluntario/>}/>
                <Route path='/CalendarioVoluntario' element={<CalendarioVoluntario/>}/>
                <Route path='/PerfilVoluntario' element={<PerfilVoluntario/>}/>
            </Routes>
        </Router>
    )
}
export default Routing;