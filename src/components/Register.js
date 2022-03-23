// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
// eslint-disable-next-line import/no-cycle
import {
  registerWithEmail, registerWithGoogle, check, emailAuthState,
} from './auth.js';

export const register = () => {
  const registerDiv = document.createElement('div');
  registerDiv.className = 'divRegister';
  const logoImgRegister = document.createElement('IMG');
  logoImgRegister.src = './Image/webLogo.png';
  logoImgRegister.className = 'logoImg';
  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.placeholder = 'E-mail';
  inputEmail.className = 'inputStyle';
  const inputPass = document.createElement('input');
  inputPass.type = 'password';
  inputPass.placeholder = 'Contraseña';
  inputPass.className = 'inputStyle';
  const btnLogin = document.createElement('button');
  btnLogin.className = 'btnStyleText';
  const btnRegisterUser = document.createElement('button');
  btnRegisterUser.className = 'btnStyle';
  const btnGoogleRegister = document.createElement('button');
  btnGoogleRegister.className = 'btnGoogle';
  const imgRegister = document.createElement('IMG');
  imgRegister.src = './Image/img2.svg';
  imgRegister.className = 'imgRegister';

  btnGoogleRegister.textContent = 'Registrarme con Google';
  btnRegisterUser.textContent = 'Registrarme';
  btnLogin.textContent = '¿Ya tienes una cuenta? Iniciar Sesión';

  btnLogin.addEventListener('click', () => onNavigate('/'));
  btnRegisterUser.addEventListener('click', () => {
    registerWithEmail(inputEmail.value, inputPass.value);
    check();
    emailAuthState();
  });
  btnGoogleRegister.addEventListener('click', () => {
    registerWithGoogle();
    emailAuthState();
  });

  registerDiv.appendChild(logoImgRegister);
  registerDiv.appendChild(inputEmail);
  registerDiv.appendChild(inputPass);
  registerDiv.appendChild(btnRegisterUser);
  registerDiv.appendChild(btnGoogleRegister);
  registerDiv.appendChild(btnLogin);
  registerDiv.appendChild(imgRegister);

  return registerDiv;
};
