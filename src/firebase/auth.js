/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
import {
  registerEmail,
  sendEmail,
  registerGoogle,
  logInEmail,
  userLogOut,
  authState,
} from './control.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const registerWithEmail = async function (email, password, user) {
  try {
    const res2 = await registerEmail(email, password, user)
    // localStorage.setItem('user');
    console.log(res2);
    const res1 = await sendEmail();
    console.log(res1);
    const res3 = await onNavigate('/register');
    console.log(res3);
    document.getElementById('informationRegister').style.display = 'block';
    document.getElementById('informationRegister').textContent =
      'Confírmanos que la  dirección de correo electrónico agregada te pertenece. Hazlo a través del correo electrónico que te envíamos.';
  } catch (error) {
    const errorCode = error.code;
    console.log(errorCode);
    const errorMessage = error.message;
    console.log(errorMessage);
    if(errorCode === 'auth/email-already-in-use') {
      document.getElementById('informationRegister').style.display = 'block';
      document.getElementById('informationRegister').textContent = 'El correo electrónico ya esta asociado a una cuenta.';
    }
    if(errorCode === 'auth/invalid-email') {
      document.getElementById('informationRegister').style.display = 'block';
      document.getElementById('informationRegister').textContent = 'Ingrese los datos correctamente.';
    }
  }
};

export const registerWithGoogle = async () => {
  await registerGoogle().then(() => { onNavigate('/home')})
};

export const loginWithEmail = (email, password) => {
  logInEmail(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      if (user.emailVerified === false) {
        document.getElementById('informationRegister').style.display = 'block';
        document.getElementById('informationRegister').textContent =
          'Tu cuenta no ha sido verificada';
      } else {
        onNavigate('/home');
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
      if (error.message === 'Firebase: Error (auth/wrong-password).') {
        document.getElementById('information').style.display = "block";
        document.getElementById('information').textContent =
          'La contraseña que has introducido es incorrecta.';
        loginPass.style.borderColor = '#ff5050';
      } else {
        document.getElementById('information').style.display = 'block';
        document.getElementById('information').textContent =
          'El correo electrónico que ingresó no está conectado a una cuenta.';
        loginEmail.style.borderColor = '#ff5050';
      }
      console.log(errorMessage);
    });
};

export const emailAuthState = () => {
  authState().then(() => {
    console.log(user + 'observador');
    if (user.emailVerified === true) {
      const uid = user.uid;
      onNavigate('/home');
      console.log('si puedo entrar, pero no');
    } else {
      onNavigate('/');
      console.log('no puedo entrar');
    }
  });
};

export const logOut = () => {
  userLogOut()
    .then(() => {
      console.log('Salir');
      onNavigate('/');
    })
    .catch((error) => {
      console.log(error);
    });
};