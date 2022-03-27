/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  signOut,
  // eslint-disable-next-line import/no-unresolved
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
// eslint-disable-next-line import/no-cycle
import { onNavigate } from "../main.js";

const auth = getAuth();
export const registerWithEmail = async function (email, password) {
  try {
    const res2 = await createUserWithEmailAndPassword(auth, email, password);
    console.log(res2);
    const res1 = await sendEmailVerification(auth.currentUser);
    console.log(res1);
    const res3 = await onNavigate("/register");
    console.log(res3);
    document.getElementById('containerRegister').style.display = 'block';
    document.getElementById('informationRegister').textContent = 'Verifique su correo  e inicia sesión';
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  }
};

const provider = new GoogleAuthProvider();
export const registerWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorMessage);
    });
};

export const loginWithEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified === false) {
        document.getElementById('containerRegister').style.display = 'block';
        document.getElementById('informationRegister').textContent = 'Tu cuenta no ha sido verificada';
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (error.message === 'Firebase: Error (auth/wrong-password).') {
        document.getElementById('containerInformation').style.display = 'block';
        document.getElementById('information').textContent = 'Contraseña invalida';
        loginPass.style.borderColor = '#ff5050';
      } else {
        document.getElementById('containerInformation').style.display = 'block';
        document.getElementById('information').textContent = 'Tu cuenta no existe';
        loginEmail.style.borderColor = '#ff5050';
      }
      console.log(errorMessage);
    });
};

export const emailAuthState = () => {
  onAuthStateChanged(auth, (user) => {
    if (user.emailVerified === true) {
      // const uid = user.uid;
      console.log(user);
      // console.log(user.emailVerified);
      onNavigate("/home");
    } else {
      onNavigate("/");
    }
  });
};

export const logOut = () => {
  signOut(auth)
    .then(() => {
      console.log("Salir");
      onNavigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
