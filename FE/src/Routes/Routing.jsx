import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Lading from '../pages/Lading';
import Sobre from "../pages/SobreNosotros"
import InicioR from '../Components/LP/InicioR';
import PrincipalEmpresa from "../Pages/PrincipalEmpresa"
import RegistroEmpresa from "../Pages/RegistroEmpresa"
import SesionEmpresa from "../Pages/SesionEmpresa"
import RegistroVoluntario from "../Pages/RegistroVoluntario"
import SesionVoluntario from "../Pages/SesionVoluntario"

const Routing = ()=>{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Lading/>}/>
                <Route path='/Sobre' element={<Sobre/>}/>
                <Route path='/InicioR' element={<InicioR/>}/>
                <Route path='/PrincipalEmpresa' element={<PrincipalEmpresa/>}/>
                <Route path='/RegistroEmpresa' element={<RegistroEmpresa/>}/>
                <Route path='/SesionEmpresa' element={<SesionEmpresa/>}/>
                <Route path='/RegistroVoluntario' element={<RegistroVoluntario/>}/>
                <Route path='/SesionVoluntario' element={<SesionVoluntario/>}/>
            </Routes>
        </Router>
    )
}
export default Routing;