// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
// eslint-disable-next-line import/no-cycle
import { logOut } from '../firebase/auth.js';
import { publication, getPublication, } from '../firebase/firestore.js';
import { postsTemplate } from './template.js';

export const home = () => {
  const loginDiv = document.createElement('div');
  // loginDiv.textContent = 'Bienvenida al Login';
  const btnLogOut = document.createElement('button');
  btnLogOut.setAttribute('class', 'btnStyle btnLogOut');
  const msgVerified = document.createElement('div');
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
  containerPublication.setAttribute('class', 'containerPublication');
  const containerPublicationP = document.createElement('div');
  containerPublicationP.setAttribute('id', 'containerPublicationP');
  const containerPublicationD = document.createElement('div');
  containerPublicationD.setAttribute('class', 'containerPublicationD');

  btnLogOut.textContent = 'Cerrar Sesión';
  btnSave.textContent = 'Guardar';

  btnLogOut.addEventListener('click', () => {
    logOut();
  });


  formPublication.addEventListener('submit', (e) => {
    e.preventDefault()
    publication( publicationTitle.value, publicationText.value); 
    formPublication.reset();
 
});

getPublication()
.then( (data) => {
  containerPublication.innerHTML = postsTemplate(data);
})
.catch((err) => {
  console.log(err);
});



// postsTemplate();
// const getPost = () => {
// let postsCollection =[];
// const getPostsCollection = getPublication();
// getPostsCollection.forEach((doc) => {
//   let  newElement = documento.createElement( `${doc.data().title}`); 
//   let a = containerPublicationP.innerHTML = newElement;
// });
// return a 
// }
// const variable1 =  getPost();
// containerPublication.innerHTML= `${variable1}`;
// const  newElement = documento.createElement( `${doc.data().title}`); 

  loginDiv.appendChild(btnLogOut);
  loginDiv.appendChild(msgVerified);
  loginDiv.appendChild(formPublication);
  formPublication.appendChild(publicationTitle);
  formPublication.appendChild(publicationText);
  formPublication.appendChild(btnSave);
  loginDiv.appendChild(containerPublication);
  containerPublication.appendChild(containerPublicationP);
  containerPublication.appendChild(containerPublicationD);
 
  return loginDiv;
}

window.addEventListener('DOMContentLoaded', () => {
   getPublication();
  });
