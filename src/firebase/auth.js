/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  signInWithEmailAndPassword, 
  signOut,
} from './control.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { auth, provider, } from '../config/firebase.config.js';
import { fnLocalStorage } from './funtions.js';

// Función de Registrar
export const registerWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

// Función de verificación de email
export const sendEmail = () => {
  return sendEmailVerification(auth.currentUser);
}
// Función de Registrar con Google 
export const registerWithGoogle = () => {
 signInWithPopup(auth, provider)
  .then((result) => {
    const credential = provider;
    const user = result.user;
    const userEmail = user.email;
    console.log(userEmail);
      fnLocalStorage(userEmail);
      onNavigate('/home');
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
}; 

// Función de Iniciar Sesión
export const loginWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    
};

// Función de Cerrar Sesion 
export const logOut = () => signOut(auth);

