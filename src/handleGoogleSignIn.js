import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from './firebase';

export const handleGoogleSignIn = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log('Usuario logueado:', result.user);
      // Redirigir al dashboard
      navigate('/dashboard');
    })
    .catch((error) => {
      console.error('Error de login:', error);
      alert(`Error al iniciar sesión: ${error.message}`);
    });
};