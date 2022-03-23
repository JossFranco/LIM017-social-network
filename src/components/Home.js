// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
// eslint-disable-next-line import/no-cycle
import { loginWithEmail, emailAuthState, registerWithGoogle  } from './auth.js';

export const home = () => {
  const homeDiv = document.createElement('div');
  homeDiv.className = 'divHome';
  const logoImg = document.createElement('IMG');
  logoImg.src = './Image/webLogo.png';
  logoImg.className = 'logoImg';
  const loginEmail = document.createElement('input');
  loginEmail.type = 'email';
  loginEmail.placeholder = 'E-mail';
  loginEmail.id = 'loginEmail';
  loginEmail.className = 'inputStyle';
  const loginPass = document.createElement('input');
  loginPass.type = 'password';
  loginPass.placeholder = 'Contraseña';
  loginPass.id = 'loginPass';
  loginPass.className = 'inputStyle';
  const btnLogin = document.createElement('button');
  btnLogin.id = 'login';
  btnLogin.className = 'btnStyle';
  const btnRegister = document.createElement('button');
  btnRegister.className = 'btnStyleText';
  const btnGoogleLogin = document.createElement('button');
  btnGoogleLogin.className = 'btnGoogle';
  const loginDiv = document.createElement('div');
  loginDiv.id = 'loginDiv';
  const img = document.createElement('IMG');
  img.src = './Image/img.svg';
  img.className = 'imgHome';
  // const imgGoogle = document.createElement('IMG');
  // imgGoogle.textContent = `<i class="fa-brands fa-google"></i>`;
  // imgGoogle.className = 'imgGoogle';

  btnGoogleLogin.textContent = 'Iniciar Sesión con Google';
  btnRegister.textContent = '¿No tienes una cuenta? Regístrate';
  btnLogin.textContent = 'Iniciar Sesión';

  btnRegister.addEventListener('click', () => onNavigate('/register'));
  btnLogin.addEventListener('click', () => {
    emailAuthState();
    loginWithEmail(loginEmail.value, loginPass.value);
    onNavigate('/login');
  });
  btnGoogleLogin.addEventListener('click', () => {
    registerWithGoogle();
    emailAuthState();
  });
  homeDiv.appendChild(logoImg);
  homeDiv.appendChild(loginEmail);
  homeDiv.appendChild(loginPass);
  homeDiv.appendChild(btnLogin);
  homeDiv.appendChild(btnGoogleLogin);
  homeDiv.appendChild(btnRegister);
  homeDiv.appendChild(loginDiv);
  homeDiv.appendChild(img);
  // btnGoogleLogin.appendChild(imgGoogle);

  return homeDiv;
};
