import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <header className="dashboard-header">Bienvenido al Dashboard</header>
      <div className="dashboard-content">
        <p>
          Aquí puedes gestionar tus finanzas personales, revisar tus gastos e ingresos, y mucho más.
        </p>
        <div className="dashboard-card">
          <h3>Resumen Financiero</h3>
          <p>Consulta un resumen de tus finanzas personales.</p>
          <a href="#" className="dashboard-link">Ver más detalles</a>
        </div>
        <div className="dashboard-card">
          <h3>Metas de Ahorro</h3>
          <p>Establece y realiza un seguimiento de tus metas de ahorro.</p>
          <a href="#" className="dashboard-link">Configurar metas</a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;