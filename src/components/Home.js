// eslint-disable-next-line import/no-cycle
import { logOut } from '../firebase/auth.js';
import { onNavigate } from '../main.js';

import {
  publication,
  getPublication,
  onGetPublication,
  deletePublication,
  getPost,
  updatePublication,
  addLike,
  removeLike,
} from '../firebase/firestore.js';

import { postsTemplate } from './template.js';

export const home = () => {
  const containerDiv = document.createElement('div');
  containerDiv.setAttribute( 'class', 'containerDiv');

  const containerProfile = document.createElement('div');
  containerProfile.setAttribute( 'class', 'containerProfile');

  const homeDiv = document.createElement('div');
  homeDiv.setAttribute('class', 'loginDiv');

  const navDiv = document.createElement('div');
  navDiv.setAttribute('class', 'navDiv');

  const imgLogo = document.createElement('IMG');
  imgLogo.setAttribute('src', './Image/logo.png');
  imgLogo.setAttribute('class', 'logoHome');

  const imgLogOut = document.createElement('IMG');
  imgLogOut.setAttribute('src', './Image/cerrarSesion.svg');
  imgLogOut.setAttribute('class', 'imgLogOut');


  const profileDiv = document.createElement('div');
  profileDiv.setAttribute('class', 'profileDiv');

  const imgProfileDiv = document.createElement('IMG');
  imgProfileDiv.setAttribute('src', './Image/fondoCiudad.PNG');
  imgProfileDiv.setAttribute('class', 'imgProfileDiv');

  const imgProfile = document.createElement('IMG');
  imgProfile.setAttribute('src', './Image/22Perfil.png');
  imgProfile.setAttribute('class', 'imgProfile');

  const nameDiv = document.createElement('div');
  nameDiv.setAttribute('class', 'nameDiv');

  const btnLogOut = document.createElement('button');
  btnLogOut.setAttribute('class', 'btnLogOut');

  const formPublication = document.createElement('form');
  formPublication.setAttribute('class', 'formPublication');

  const publicationTitle = document.createElement('input');
  publicationTitle.setAttribute('placeholder', '¿Qué quieres compartir?');
  publicationTitle.setAttribute('class', 'publicationTitle');

  const publicationText = document.createElement('textarea');
  publicationText.setAttribute('placeholder', 'Escribe aquí');
  publicationText.setAttribute('class', 'publicationText');
  publicationText.setAttribute('rows', '5');

  const btnSave = document.createElement('button');
  btnSave.setAttribute('class', 'btnSave');
  btnSave.setAttribute('id', 'btnSave');

  const containerPublication = document.createElement('div');

  const errorPublication = document.createElement('div');
  errorPublication.setAttribute('class', 'errorPublication');

  const formEdit = document.createElement('form');
  formEdit.setAttribute('class', 'formPublication formEdit');
  formEdit.setAttribute('id', 'formEdit');

  const editTitle = document.createElement('input');
  editTitle.setAttribute('placeholder', '¿Qué quieres compartir?');
  editTitle.setAttribute('class', 'publicationTitle');

  const editText = document.createElement('textarea');
  editText.setAttribute('placeholder', 'Escribe aquí');
  editText.setAttribute('class', 'publicationText');
  editText.setAttribute('rows', '5');
  
  const btnUpdate = document.createElement('button');
  btnUpdate.setAttribute('class', 'btnSave');
  btnUpdate.setAttribute('id', 'btnSave');

  btnLogOut.textContent = 'Cerrar Sesión';
  btnSave.textContent = 'Publicar';
  nameDiv.textContent = localStorage.getItem('email');

  imgLogOut.addEventListener('click', () => {
    logOut();
      onNavigate('/');
      localStorage.clear();
  });

  btnLogOut.addEventListener('click', () => {
    logOut();
      onNavigate('/');
      localStorage.clear();
  });

  let editStatus = false;
  let id = '';
  formPublication.addEventListener('submit', (e) => {
    e.preventDefault();
    if (
      !editStatus
      && publicationTitle.value !== ''
      && publicationText.value !== ''
    ) {
      publication(publicationTitle.value, publicationText.value);
    } else if (!editStatus && publicationTitle.value === '') {
      errorPublication.textContent = '- Debe agregar el título';
      publicationTitle.setAttribute('id', 'postTitle');
    } else if (!editStatus && publicationText.value === '') {
      errorPublication.textContent = '- Debe agregar descripción';
    }
    editStatus = false;
    formPublication.reset();
  });

  formEdit.addEventListener('submit', (e) => {
    e.preventDefault();
    if (editStatus) {
      updatePublication(id, { title: editTitle.value, text: editText.value });
    }
    formEdit.reset();
  });
  onGetPublication(() => {
    getPublication()
      .then(async (data) => {
        postsTemplate(data, containerPublication);

        const btnsDelete = containerPublication.querySelectorAll('.btnsDelete');
        const btnsEdit = containerPublication.querySelectorAll('.btnsEdit');
        const btnsLikes = containerPublication.querySelectorAll('.btnsLikes');
        btnsLikes.forEach((btn) => {
          btn.addEventListener('click', async (e) => {
            const userId = localStorage.getItem('email');
            const doc = await getPost(e.currentTarget.dataset.id);
            id = doc.id;
            const dataCollection = doc.data().likes;
            if (dataCollection.includes(userId)) {
              await updatePublication(id, {
                likes: removeLike(userId),
              });
              // btnsLikes.classList.toggle('btnLikeBlue');
            } else {
              await updatePublication(id, {
                likes: addLike(userId),
              });
              // btnsLikes.classList.toggle('btnLikeBlue');
            }
          });
        });

        btnsDelete.forEach((btn) => {
          btn.addEventListener('click', async ({ target: { dataset } }) => {
            await deletePublication(dataset.id);
          });
        });

        btnsEdit.forEach((btn) => {
          btn.addEventListener('click', async (e) => {
            formPublication.setAttribute('class', 'formHidden');
            document.getElementById('formEdit').style.display = 'block';
            const doc = await getPost(e.target.dataset.id);
            // eslint-disable-next-line no-shadow
            const publication = doc.data();
            editTitle.value = publication.title;
            editText.value = publication.text;
            editStatus = true;
            id = e.target.dataset.id;
            btnUpdate.textContent = 'Actualizar';
            btnUpdate.setAttribute('class', 'btnUpdate');
            formPublication.reset();
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
  btnUpdate.addEventListener('click', () => {
    formPublication.setAttribute('class', 'formPublication ');
    document.getElementById('formEdit').style.display = 'none';
  });
  
  containerDiv.appendChild(navDiv);
  containerDiv.appendChild(containerProfile);
  containerDiv.appendChild(homeDiv);
  containerProfile.appendChild(profileDiv)
  profileDiv.appendChild(imgProfileDiv);
  profileDiv.appendChild(imgProfile);
  containerProfile.appendChild(nameDiv);
  navDiv.appendChild(imgLogo);
  navDiv.appendChild(imgLogOut);
  homeDiv.appendChild(formPublication);
  formPublication.appendChild(publicationTitle);
  formPublication.appendChild(publicationText);
  formPublication.appendChild(errorPublication);
  formPublication.appendChild(btnSave);
  loginDiv.appendChild(formEdit);
  formEdit.appendChild(editTitle);
  formEdit.appendChild(editText);
  formEdit.appendChild(btnUpdate);
  homeDiv.appendChild(formEdit);
  homeDiv.appendChild(containerPublication);
  homeDiv.appendChild(btnLogOut);

  return containerDiv;
};
