import { useNavigate } from "react-router-dom"


const SobreNosotros = () => {
    const navigate = useNavigate()

    return (
        <div id="inicio">

            <div id="hero-section">
                <h1 id="hero-title">Voluntify</h1>
                <p id="hero-subtitle">Conectando Oportunidades Globales</p>
                <p id="hero-description">
                    La plataforma líder en voluntariado corporativo donde tu talento genera impacto social real
                </p>
            </div>

            <div id="impacto-section">
                <div className="impacto-item">
                    <h3 className="impacto-numero">500+</h3>
                    <p className="impacto-texto">Oportunidades Activas</p>
                </div>
                <div className="impacto-item">
                    <h3 className="impacto-numero">10K+</h3>
                    <p className="impacto-texto">Voluntarios Conectados</p>
                </div>
                <div className="impacto-item">
                    <h3 className="impacto-numero">200+</h3>
                    <p className="impacto-texto">Empresas Aliadas</p>
                </div>
            </div>
            <div id="about-section">
                <div id="about-card">
                    <h2 id="about-title">¿Quiénes Somos?</h2>
                    <p id="about-text">
                        One World Hub es una plataforma innovadora dedicada a conectar voluntarios apasionados con empresas comprometidas 
                        en proyectos de impacto social. Creamos un ecosistema colaborativo donde el talento profesional se transforma 
                        en cambio positivo, permitiendo que cada persona y organización contribuya al desarrollo sostenible de nuestras comunidades.
                    </p>
                </div>
                <div id="direccion-section">
                    <h2 id="direccion-title">Nuestra Dirección</h2>

                    <div id="direccion-cards">
                        <div className="direccion-card" id="mision-card">
                            <h3 className="direccion-heading">🎯 Nuestra Misión</h3>
                            <p className="direccion-text">
                                Facilitar conexiones significativas entre voluntarios talentosos y empresas comprometidas con causas sociales, 
                                generando impacto medible y sostenible en nuestras comunidades.
                            </p>
                        </div>

                        <div className="direccion-card" id="vision-card">
                            <h3 className="direccion-heading">🌍 Nuestra Visión</h3>
                            <p className="direccion-text">
                                Ser la plataforma global de referencia en voluntariado corporativo, transformando profesionales en agentes 
                                de cambio y democratizando el acceso a proyectos transformadores.
                            </p>
                        </div>

                        <div className="direccion-card" id="valores-card">
                            <h3 className="direccion-heading">💎 Nuestros Valores</h3>
                            <p className="direccion-text">
                                Transparencia, inclusión, sostenibilidad e impacto. Creemos en el poder de la colaboración para generar 
                                cambios duraderos y significativos en la sociedad.
                            </p>
                        </div>
                    </div>
                </div>

                <div id="porque-section">
                    <h2 id="porque-title">¿Por Qué Voluntify?</h2>
                    <div id="porque-cards">
                        <div className="porque-item">
                            <p><strong>✓ Acceso Intuitivo:</strong><br />Plataforma fácil de usar para encontrar oportunidades de voluntariado.</p>
                        </div>
                        <div className="porque-item">
                            <p><strong>✓ Impacto Verificado:</strong><br />Seguimiento transparente y medición real del impacto social.</p>
                        </div>
                        <div className="porque-item">
                            <p><strong>✓ Red Global:</strong><br />Conecta con voluntarios y empresas de todo el mundo.</p>
                        </div>
                        <div className="porque-item">
                            <p><strong>✓ Proyectos Significativos:</strong><br />Participa en iniciativas que marcan la diferencia.</p>
                        </div>
                        <div className="porque-item">
                            <p><strong>✓ Transparencia Total:</strong><br />Conoce exactamente dónde va tu tiempo y talento.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="cta-section">
                <h2 id="cta-title">¿Quieres unirte a Voluntify?</h2>
                <p id="cta-text">
                    Sé parte del movimiento de impacto social y voluntariado corporativo
                </p>

                <div id="cta-cards">
                    <div className="cta-card" id="cta-voluntario">
                        <h3 className="cta-heading">👤 Como Voluntario</h3>
                        <p className="cta-description">
                            Descubre oportunidades de voluntariado corporativo, desarrolla nuevas habilidades y contribuye al cambio social positivo.
                        </p>
                        <button className="btn-primary" onClick={() => navigate("/SesionVoluntario")}>Iniciar Sesión</button>
                        <button className="btn-secondary" onClick={() => navigate("/RegistroVoluntario")}>Registrarse Ahora</button>
                    </div>

                    <div className="cta-card" id="cta-empresa">
                        <h3 className="cta-heading">🏢 Como Empresa</h3>
                        <p className="cta-description">
                            Fortalece tu RSC, conecta con talento profesional y crea proyectos de impacto social alineados con tus valores.
                        </p>
                        <button className="btn-primary" onClick={() => navigate("/SesionEmpresa")}>Iniciar Sesión</button>
                        <button className="btn-secondary" onClick={() => navigate("/RegistroEmpresa")}>Registrar Empresa</button>
                    </div>
                </div>
            </div>

            <footer id="footer">
                <p>© 2025 Voluntify. Conectando Oportunidades Globales | Todos los derechos reservados.</p>
            </footer>
        </div>
    )
}

export default SobreNosotros