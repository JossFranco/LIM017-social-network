// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
// eslint-disable-next-line import/no-cycle
import {
  registerWithEmail, registerWithGoogle, emailAuthState,
} from './auth.js';

export const register = () => {
  const registerDiv = document.createElement('div');
  registerDiv.setAttribute('class', 'divRegister');
  const logoImgRegister = document.createElement('IMG');
  logoImgRegister.setAttribute('src', './Image/webLogo.png');
  logoImgRegister.setAttribute('class', 'logoImg');
  const inputEmail = document.createElement('input');
  const inputUserId = document.createElement('input');
  inputUserId.setAttribute('type', 'text');
  inputUserId.setAttribute('placeholder', 'Nombre de Usuario');
  inputUserId.setAttribute('class', 'inputStyle');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('placeholder', 'E-mail');
  inputEmail.setAttribute('class', 'inputStyle');
  const inputPass = document.createElement('input');
  inputPass.setAttribute('type', 'password');
  inputPass.setAttribute('placeholder', 'Contraseña');
  inputPass.setAttribute('class', 'inputStyle');
  inputPass.setAttribute('min', '6');
  const btnLogin = document.createElement('button');
  btnLogin.setAttribute('class', 'btnStyleText');
  const btnRegisterUser = document.createElement('button');
  btnRegisterUser.setAttribute('class', 'btnStyle');
  const btnGoogleRegister = document.createElement('button');
  btnGoogleRegister.setAttribute('class', 'btnGoogle');
  const imgRegister = document.createElement('IMG');
  imgRegister.setAttribute('src', './Image/img2.svg');
  imgRegister.setAttribute('class', 'imgRegister');
  const containerRegisterDiv = document.createElement('div');
  containerRegisterDiv.setAttribute('id', 'containerRegister');
  containerRegisterDiv.setAttribute('class', 'containerRegister');
  const informationRegisterDiv = document.createElement('div');
  informationRegisterDiv.setAttribute('id', 'informationRegister');
  informationRegisterDiv.setAttribute('class', 'information informationRegister');
  const btnCloseGreen = document.createElement('button');
  btnCloseGreen.setAttribute('class', 'xCloseGreen');

  btnGoogleRegister.textContent = 'Registrarme con Google';
  btnRegisterUser.textContent = 'Registrarme';
  btnLogin.textContent = '¿Ya tienes una cuenta? Iniciar Sesión';
  btnCloseGreen.textContent = 'X';

  btnLogin.addEventListener('click', () => onNavigate('/'));
  btnRegisterUser.addEventListener('click', () => {
    registerWithEmail(inputEmail.value, inputPass.value);
  });
  btnGoogleRegister.addEventListener('click', () => {
    registerWithGoogle();
    emailAuthState();
  });
  btnCloseGreen.addEventListener('click', () => onNavigate('/register'));

  registerDiv.appendChild(logoImgRegister);
  registerDiv.appendChild(containerRegisterDiv);
  containerRegisterDiv.appendChild(btnCloseGreen);
  containerRegisterDiv.appendChild(informationRegisterDiv);
  registerDiv.appendChild(inputEmail);
  registerDiv.appendChild(inputPass);
  registerDiv.appendChild(btnRegisterUser);
  registerDiv.appendChild(btnGoogleRegister);
  registerDiv.appendChild(btnLogin);
  registerDiv.appendChild(imgRegister);

  return registerDiv;
};
