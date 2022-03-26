// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
// eslint-disable-next-line import/no-cycle
import { loginWithEmail, emailAuthState, registerWithGoogle } from './auth.js';

export const home = () => {
  const homeDiv = document.createElement('div');
  homeDiv.className = 'divHome';
  const logoImg = document.createElement('IMG');
  logoImg.setAttribute('src', './Image/webLogo.png');
  logoImg.setAttribute('class', 'logoImg');
  const loginEmail = document.createElement('input');
  loginEmail.type = 'email';
  loginEmail.placeholder = 'E-mail';
  loginEmail.setAttribute('id', 'loginEmail');
  loginEmail.className = 'inputStyle';
  // loginEmail.setAttribute('required');
  const loginPass = document.createElement('input');
  loginPass.type = 'password';
  loginPass.placeholder = 'Contraseña';
  loginPass.setAttribute('id', 'loginPass');
  loginPass.setAttribute('class', 'inputStyle');
  loginPass.setAttribute('min', '6');
  // loginPass.setAttribute('required');
  const btnLogin = document.createElement('button');
  btnLogin.setAttribute('id', 'login');
  btnLogin.setAttribute('class', 'btnStyle');
  const btnRegister = document.createElement('button');
  btnRegister.setAttribute('class', 'btnStyleText');
  const btnGoogleLogin = document.createElement('button');
  btnGoogleLogin.setAttribute('class', 'btnGoogle');
  const loginDiv = document.createElement('div');
  loginDiv.setAttribute('id', 'loginDiv');
  const img = document.createElement('IMG');
  img.setAttribute('src', './Image/img.svg');
  img.setAttribute('class', 'imgHome');

  // const imgGoogle = document.createElement('IMG');
  // imgGoogle.textContent = `<i class="fa-brands fa-google"></i>`;
  // imgGoogle.className = 'imgGoogle';

  btnGoogleLogin.textContent = 'Iniciar Sesión con Google';
  btnRegister.textContent = '¿No tienes una cuenta? Regístrate';
  btnLogin.textContent = 'Iniciar Sesión';

  btnRegister.addEventListener('click', () => onNavigate('/register'));
  btnLogin.addEventListener('click', () => {
    loginWithEmail(loginEmail.value, loginPass.value);
    emailAuthState();
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
