/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  signInWithEmailAndPassword, 
  signOut,
  provider,
} from './control.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { auth } from '../config/firebase.config.js';


export const registerWithEmail = async function (email, password) {
  try {
    const register = await createUserWithEmailAndPassword(auth, email, password);
    console.log(register);
    const send = await sendEmailVerification(auth.currentUser);
    console.log(send);
    const uid = user.uid;
    console.log(uid);
    if (localStorage.getItem('email') !== null) {
      localStorage.removeItem('email');
      localStorage.setItem('email', email);
    } else {
      localStorage.setItem('email', email);
    }
  } catch (error) {
    const errorCode = error.code;
    console.log(errorCode);
    const errorMessage = error.message;
    console.log(errorMessage);
    if (errorCode === 'auth/email-already-in-use') {
      document.getElementById('informationRegister').style.display = 'block';
      document.getElementById('informationRegister').textContent = 'El correo electrónico ya esta asociado a una cuenta.';
    }
    if (errorCode === 'auth/invalid-email') {
      document.getElementById('informationRegister').style.display = 'block';
      document.getElementById('informationRegister').textContent = 'Ingrese los datos correctamente.';
    }
  }
};

export const registerWithGoogle = async () => {
  await signInWithPopup(auth, provider)
    .then((result) => {
      const credential = provider;
      const user = result.user;
      const userEmail = user.email;
      console.log(userEmail);
      if (localStorage.getItem('email') !== null) {
        localStorage.removeItem('email');
        localStorage.setItem('email', userEmail);
      } else {
        localStorage.setItem('email', userEmail);
      }
      onNavigate('/home');
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

export const loginWithEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      if (user.emailVerified === false) {
        document.getElementById('informationRegister').style.display = 'block';
        document.getElementById('informationRegister').textContent = 'Tu cuenta no ha sido verificada';
      } else {
        onNavigate('/home');
        const uid = user.uid;
        console.log(uid);
        if (localStorage.getItem('email') !== null) {
          localStorage.removeItem('email');
          localStorage.setItem('email', email);
        } else {
          localStorage.setItem('email', email);
        }
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
      if (error.message === 'Firebase: Error (auth/wrong-password).') {
        document.getElementById('information').style.display = 'block';
        document.getElementById('information').textContent = 'La contraseña que has introducido es incorrecta.';
        loginPass.style.borderColor = '#ff5050';
      } else {
        document.getElementById('information').style.display = 'block';
        document.getElementById('information').textContent = 'El correo electrónico que ingresó no está conectado a una cuenta.';
        loginEmail.style.borderColor = '#ff5050';
      }
      console.log(errorMessage);
    });
};

export const logOut = () => {
  signOut(auth)
};

