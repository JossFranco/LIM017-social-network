// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
// eslint-disable-next-line import/no-cycle
import { logOut } from './auth.js';

export const login = () => {
  const loginDiv = document.createElement('div');
  loginDiv.textContent = 'Bienvenida al Login';
  const btnLogOut = document.createElement('button');
  btnLogOut.className = 'btnStyle';
  const msgVerified = document.createElement('div');

  btnLogOut.textContent = 'Cerrar Sesión';
  btnLogOut.addEventListener('click', () => {
    logOut();
    onNavigate('/');
  });

  loginDiv.appendChild(btnLogOut);
  loginDiv.appendChild(msgVerified);

  return loginDiv;
};
