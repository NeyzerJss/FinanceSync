import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase'; // Asegúrate de que esta ruta sea correcta
import './LoginPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar correo y contraseña específicos
    if (email === '2302009@utrivieramaya.edu.mx' && password === '123') {
      console.log('Acceso concedido');
      navigate('/dashboard'); // Redirigir al dashboard
    } else {
      alert('Correo o contraseña incorrectos');
    }
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('Inicio de sesión con Google exitoso:', result.user);
        navigate('/dashboard'); // Redirigir al dashboard
      })
      .catch((error) => {
        console.error('Error al iniciar sesión con Google:', error);
        alert('Error al iniciar sesión con Google');
      });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>
        <div className="divider">o</div>
        <button onClick={handleGoogleSignIn} className="google-button">
          <i className="fab fa-google"></i> Iniciar sesión con Google
        </button>
        <p className="register-link">
          ¿No tienes cuenta? <span onClick={() => navigate('/register')}>Regístrate aquí</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;