// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
// eslint-disable-next-line import/no-cycle
import { logOut } from '../firebase/auth.js';
import { publication, getPublication, } from '../firebase/firestore.js';

export const home = () => {
  const loginDiv = document.createElement('div');
  loginDiv.textContent = 'Bienvenida al Login';
  const btnLogOut = document.createElement('button');
  btnLogOut.setAttribute('class', 'btnStyle');
  const msgVerified = document.createElement('div');
  const formPublication = document.createElement('form');
  formPublication.setAttribute('id', 'formPublication');
  const publicationTitle =  document.createElement('input');
  publicationTitle.setAttribute('placeholder', 'Título de la Publicación');
  publicationTitle.setAttribute('id', 'publicationTitle');
  const publicationText =  document.createElement('textarea');
  publicationText.setAttribute('placeholder', 'Escribe aquí');
  publicationText.setAttribute('id', 'publicationText');
  const btnSave = document.createElement('button');
  btnSave.setAttribute('id', 'btnSave');
  const containerPublication = document.createElement('div');
  containerPublication.setAttribute('class', 'containerPublication');

  btnLogOut.textContent = 'Cerrar Sesión';
  btnSave.textContent = 'Guardar';

  btnLogOut.addEventListener('click', () => {
    logOut();
  });


  formPublication.addEventListener('submit', (e) => {
    e.preventDefault()
    publication( publicationTitle.value, publicationText.value); 
});

  loginDiv.appendChild(btnLogOut);
  loginDiv.appendChild(msgVerified);
  loginDiv.appendChild(formPublication);
  formPublication.appendChild(publicationTitle);
  formPublication.appendChild(publicationText);
  formPublication.appendChild(btnSave);
  loginDiv.appendChild(containerPublication);


  return loginDiv;
}

window.addEventListener('DOMContentLoaded', async () => {
  getPublication();
  });
