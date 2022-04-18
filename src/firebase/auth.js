/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
import {
  registerEmail,
  sendEmail,
  registerGoogle,
  logInEmail,
  userLogOut,
  provider,
  // authState,
} from './control.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const registerWithEmail = async function (email, password, name) {
  try {
     const register = await registerEmail(email, password, name);
     console.log(register);
     const send = await sendEmail();
     console.log(send);
     onNavigate('/register');
    document.getElementById('informationRegister').style.display = 'block';
    document.getElementById('informationRegister').textContent =
      'Confírmanos que la  dirección de correo electrónico agregada te pertenece. Hazlo a través del correo electrónico que te envíamos.';
      const uid = user.uid;
      console.log(uid);
      if(localStorage.getItem('usuario') !== null && localStorage.getItem('email') !== null && localStorage.getItem('name')!== null)  {
        localStorage.removeItem('usuario');
        localStorage.removeItem('email');
        localStorage.removeItem('name');
        localStorage.setItem('usuario', uid );
        localStorage.setItem('email', email );
        localStorage.setItem('name', name );
      }else{
        localStorage.setItem('usuario', uid );
        localStorage.setItem('email', email );
        localStorage.setItem('name', name );
        user(email, name);
       }
          
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
  await registerGoogle()
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = provider;
    const token = credential.accessToken;
    console.log('aqui token');
    console.log(token);
    // The signed-in user info.
    console.log('aqui user');
    const user = result.user;
    console.log(user);
    // ...
    console.log('aqui userEmail');
    const userEmail = user.email;
    console.log(userEmail);
    console.log('aqui credencial ');
    console.log(credential);
    if(localStorage.getItem('email') !== null)  {
        localStorage.removeItem('email');
        localStorage.setItem('email', userEmail);
      }else{
        localStorage.setItem('email', userEmail);
       }
    onNavigate('/home');
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    console.log(error);
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(credential)
});
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
        const uid = user.uid;
          console.log(uid);
          if(localStorage.getItem('usuario') !== null && localStorage.getItem('email') !== null && localStorage.getItem('name')!== null)  {
            localStorage.removeItem('usuario');
            localStorage.removeItem('email');
            localStorage.removeItem('name');
            localStorage.setItem('usuario', uid );
            localStorage.setItem('email', email );
            localStorage.setItem('name', name );
          }else{
            localStorage.setItem('usuario', uid );
            localStorage.setItem('email', email );
            localStorage.setItem('name', name );
            console.log('tu email aqui');
            console.log(user.displayName);
            console.log(user.email);
          }
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

// export const emailAuthState = () => {
//   authState().then(() => {
//     console.log(user + 'observador');
//     if (user.emailVerified === true) {
//       const uid = user.uid;
//       onNavigate('/home');
//       console.log('si puedo entrar, pero no');
//     } else {
//       onNavigate('/');
//       console.log('no puedo entrar');
//     }
//   });
// };

export const logOut = () => {
  userLogOut()
    .then(() => {
      console.log('Salir');
      onNavigate('/');
      localStorage.clear();
    })
    .catch((error) => {
      console.log(error);
    });
};