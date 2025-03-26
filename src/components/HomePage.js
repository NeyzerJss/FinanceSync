import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InicioDashboard.css'; // Asegúrate de que este archivo esté en la misma carpeta y tenga los estilos correctos.

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login'); // Redirige al login
  };

  return (
    <div>
      {/* Barra de Navegación */}
      <section>
        <nav className="barra-navegacion">
          <div className="logo">
            <img src="/ImgDashboard/LogoFinanceSync.png" alt="LogoFinanceSync" width="226" height="50" />
          </div>
          <div className="enlaces-nav">
            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#planes">Planes</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div className="botones">
            <div className="boton boton-iniciar-sesion" onClick={handleLoginRedirect}>
              Iniciar Sesión
            </div>
            <div className="boton boton-crear-cuenta">Crear Cuenta</div>
          </div>
        </nav>
      </section>

      {/* Información Principal */}
      <section id="inicio" className="seccion-informacion-inicial">
        <div className="informacion-inicial">
          <h1>FinanceSync®</h1>
          <p>
            Gestionar tus finanzas nunca ha sido tan fácil. FinanceSync es una aplicación diseñada para ayudarte a llevar un control completo de tus gastos, ingresos y ahorros de manera intuitiva y eficiente.
          </p>
          <div className="boton-inicio">
            <button className="boton-explorar">¡Explorar!</button>
          </div>
        </div>
        <img src="/ImgDashboard/IMG Principal 1.png" alt="Imagen Principal" width="546" height="294" />
      </section>

      {/* Sección sobre FinanceSync */}
      <section id="nosotros" className="acerca-de-financesync">
        <div className="contenedor-info-acerca">
          <h2>Todo lo que necesitas en un solo lugar</h2>
          <p>
            Nuestra aplicación de manejo de finanzas está diseñada para ayudarte a tomar el control de tus finanzas personales de manera sencilla y efectiva.
          </p>
        </div>
      </section>

      {/* Sección de Planes */}
      <section id="planes" className="seccion-planes">
        <center>
          <h2>Planes</h2>
        </center>
        <div className="todos-los-planes">
          <div className="contenedor-planes">
            <div className="contenedor">
              <p className="tipo-de-plan">Plan Gratuito</p>
              <p className="precio-gratuito">$0.00 mx</p>
              <div className="separador"></div>
              <ul className="beneficios">
                <li>Recordatorios</li>
                <li>Crear Gestión de Gastos (4 Gestiones)</li>
                <li>Recomendaciones Diarias</li>
                <li>Calendario de Pagos</li>
                <li>Reporte de Gastos Mensuales</li>
              </ul>
              <button className="boton-adquirir">Adquirir</button>
            </div>
          </div>
          <div className="contenedor-planes">
            <div className="contenedor">
              <p className="tipo-de-plan">Plan Premium</p>
              <p className="precio-premium">$149.00 mx</p>
              <div className="separador"></div>
              <ul className="beneficios">
                <li>Recordatorios</li>
                <li>Crear Gestión de Gastos (Ilimitado)</li>
                <li>Recomendaciones Diarias</li>
                <li>Calendario de Pagos</li>
                <li>Reporte de Gastos Mensuales</li>
                <li>Visualizar Gastos Anteriores</li>
                <li>Crear Metas de Ahorro</li>
              </ul>
              <button className="boton-adquirir">Adquirir</button>
            </div>
          </div>
        </div>
      </section>

      {/* Descubre FinanceSync */}
      <section id="contacto" className="descubre-financesync">
        <h2>Descubre FinanceSync®</h2>
        <div className="contenedor-de-descripciones">
          <div className="contenedor-de-informacion">
            <div className="descripcion">
              <p className="titulo-de-informacion">Simplifica y Domina tus Finanzas</p>
              <p>
                FinanceSync es la solución perfecta para quienes desean tener un control total sobre sus finanzas. Con su capacidad de sincronización automática, puedes gestionar todas tus cuentas y gastos en un solo lugar.
              </p>
            </div>
            <img src="/ImgDashboard/DescubreIMG1.png" alt="Imagen Representativa" width="205" height="247" />
          </div>
          <div className="contenedor-de-informacion">
            <img src="/ImgDashboard/DescubreIMG2.png" alt="Imagen Representativa" width="205" height="248" />
            <div className="descripcion">
              <p className="titulo-de-informacion">Tu Asistente Financiero</p>
              <p>
                Es una innovadora aplicación de finanzas que se distingue por su capacidad de sincronización automática en tiempo real al registrar manualmente tus transacciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="contenedor-footer-izquierda">
          <a href="#inicio">
            <img src="/ImgDashboard/LogoFinanceSync-sinfondo.png" alt="LogoFinanceSync" width="226" height="49" />
          </a>
        </div>
        <div className="contenedor-footer-derecha">
          <p className="titulo-redes">Redes Sociales</p>
          <div className="logos-de-redes">
            <a href="https://www.facebook.com">
              <img src="/ImgDashboard/LogoFacebook.png" alt="Logo Facebook" width="40" height="40" />
            </a>
            <a href="#">
              <img src="/ImgDashboard/LogoIG.png" alt="Logo Instagram" width="40" height="40" />
            </a>
            <a href="#">
              <img src="/ImgDashboard/LogoX.png" alt="Logo X" width="40" height="40" />
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">Soporte</a>
              </li>
              <li>
                <a href="#">Privacidad</a>
              </li>
              <li>
                <a href="#">Términos y Condiciones</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;