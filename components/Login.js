// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { fnLocalStorage } from '../firebase/funtions.js';
// eslint-disable-next-line import/no-cycle
import { registerWithGoogle, loginWithEmail } from '../firebase/auth.js';

export const login = () => {
  const loginDiv = document.createElement('div');
  loginDiv.setAttribute('class', 'divHome');

  const logoImg = document.createElement('IMG');
  logoImg.setAttribute('src', './Image/webLogo.png');
  logoImg.setAttribute('class', 'logoImg');

  const loginEmail = document.createElement('input');
  loginEmail.setAttribute('type', 'email');
  loginEmail.setAttribute('placeholder', 'E-mail');
  loginEmail.setAttribute('id', 'loginEmail');
  loginEmail.setAttribute('class', 'inputStyle');

  const loginPass = document.createElement('input');
  loginPass.setAttribute('type', 'password');
  loginPass.setAttribute('placeholder', 'Contraseña');
  loginPass.setAttribute('id', 'loginPass');
  loginPass.setAttribute('class', 'inputStyle');
  loginPass.setAttribute('min', '6');

  const btnLogin = document.createElement('button');
  btnLogin.setAttribute('id', 'login');
  btnLogin.setAttribute('class', 'btnStyle btnLogIn');

  const btnRegister = document.createElement('button');
  btnRegister.setAttribute('id', 'btnRegister');
  btnRegister.setAttribute('class', 'btnStyleText');

  const btnGoogleLogin = document.createElement('button');
  btnGoogleLogin.setAttribute('id', 'btnGoogleLogin');
  btnGoogleLogin.setAttribute('class', 'btnGoogle');

  const loginDiv2 = document.createElement('div');
  loginDiv2.setAttribute('id', 'loginDiv');

  const img = document.createElement('IMG');
  img.setAttribute('src', './Image/img.svg');
  img.setAttribute('class', 'imgHome');

  const informationDiv = document.createElement('div');
  informationDiv.setAttribute('id', 'information');
  informationDiv.setAttribute('class', 'information informationNone');

  btnGoogleLogin.textContent = 'Iniciar Sesión con Google';
  btnRegister.textContent = '¿No tienes una cuenta? Regístrate';
  btnLogin.textContent = 'Iniciar Sesión';

  btnRegister.addEventListener('click', () => onNavigate('/register'));
  btnLogin.addEventListener('click', () => {
    loginWithEmail(loginEmail.value, loginPass.value)
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
          fnLocalStorage(loginEmail.value);
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
  });

  btnGoogleLogin.addEventListener('click', () => {
    registerWithGoogle();
  });

  loginDiv.appendChild(logoImg);
  loginDiv.appendChild(loginEmail);
  loginDiv.appendChild(loginPass);
  loginDiv.appendChild(informationDiv);
  loginDiv.appendChild(btnLogin);
  loginDiv.appendChild(btnGoogleLogin);
  loginDiv.appendChild(btnRegister);
  loginDiv.appendChild(loginDiv2);
  loginDiv.appendChild(img);

  return loginDiv;
};
