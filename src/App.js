import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Página de inicio */}
        <Route path="/login" element={<LoginPage />} /> {/* Página de login */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard */}
      </Routes>
    </Router>
  );
}

export default App;