// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
// eslint-disable-next-line import/no-cycle
import { loginWithEmail, emailAuthState, registerWithGoogle } from './auth.js';

export const home = () => {
  const homeDiv = document.createElement('div');
  homeDiv.setAttribute('class', 'divHome');
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
  const containerInformation = document.createElement('div');
  containerInformation.setAttribute('id', 'containerInformation');
  containerInformation.setAttribute('class', 'containerInformation');
  const informationDiv = document.createElement('div');
  informationDiv.setAttribute('id', 'information');
  informationDiv.setAttribute('class', 'information informationNone');
  const btnClose = document.createElement('button');
  btnClose.setAttribute('class', 'xClose');
  btnClose.setAttribute('id', 'xClose');

  btnGoogleLogin.textContent = 'Iniciar Sesión con Google';
  btnRegister.textContent = '¿No tienes una cuenta? Regístrate';
  btnLogin.textContent = 'Iniciar Sesión';
  btnClose.textContent = 'X';

  btnRegister.addEventListener('click', () => onNavigate('/register'));
  btnLogin.addEventListener('click', () => {
    loginWithEmail(loginEmail.value, loginPass.value);
    emailAuthState();
  });
  btnGoogleLogin.addEventListener('click', () => {
    registerWithGoogle();
    emailAuthState();
  });
  btnClose.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(logoImg);
  homeDiv.appendChild(loginEmail);
  homeDiv.appendChild(loginPass);
  homeDiv.appendChild(containerInformation);
  containerInformation.appendChild(btnClose);
  containerInformation.appendChild(informationDiv);
  homeDiv.appendChild(btnLogin);
  homeDiv.appendChild(btnGoogleLogin);
  homeDiv.appendChild(btnRegister);
  homeDiv.appendChild(loginDiv);
  homeDiv.appendChild(img);

  return homeDiv;
};
