// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
// eslint-disable-next-line import/no-cycle
import { logOut } from '../firebase/auth.js';
import { publication, getPublication } from '../firebase/firestore.js';
import { postsTemplate } from './template.js';

export const home = () => {
  const loginDiv = document.createElement('div');
  const profileDiv = document.createElement('div');
  profileDiv.setAttribute('class', 'profileDiv');
  const imgProfile = document.createElement('IMG');
  imgProfile.setAttribute('src', './Image/imgPerfil.png');
  imgProfile.setAttribute('class', 'imgProfile');
  const nameDiv = document.createElement('div');
  nameDiv.setAttribute('class', 'nameDiv');
  const btnLogOut = document.createElement('button');
  btnLogOut.setAttribute('class', 'btnLogOut');
  const formPublication = document.createElement('form');
  formPublication.setAttribute('class', 'formPublication');
  const publicationTitle =  document.createElement('input');
  publicationTitle.setAttribute('placeholder', 'Título de la Publicación');
  publicationTitle.setAttribute('class', 'publicationTitle');
  const publicationText =  document.createElement('textarea');
  publicationText.setAttribute('placeholder', 'Escribe aquí');
  publicationText.setAttribute('class', 'publicationText');
  const btnSave = document.createElement('button');
  btnSave.setAttribute('id', 'btnSave');
  const containerPublication = document.createElement('div');

  btnLogOut.textContent = 'Cerrar Sesión';
  btnSave.textContent = 'Guardar';

  btnLogOut.addEventListener('click', () => {
    logOut();
  });

  nameDiv.textContent ='Nombre'

  formPublication.addEventListener('submit', (e) => {
    e.preventDefault()
    publication( publicationTitle.value, publicationText.value); 
    formPublication.reset();
});

getPublication()
.then((data) => {
 postsTemplate(data, containerPublication);
})
.catch((err) => {
  console.log(err);
});

// getUser()
// .then((data) => {
//   userTemplate(data, nameDiv);
// })
// .catch((err) => {
//   console.log(err);
// });

  loginDiv.appendChild(profileDiv);
  profileDiv.appendChild(imgProfile);
  loginDiv.appendChild(nameDiv);
  loginDiv.appendChild(formPublication);
  formPublication.appendChild(publicationTitle);
  formPublication.appendChild(publicationText);
  formPublication.appendChild(btnSave);
  loginDiv.appendChild(containerPublication);
  loginDiv.appendChild(btnLogOut);

 
  return loginDiv;
}

// window.addEventListener('DOMContentLoaded', () => {
//    getPublication();
//   });
