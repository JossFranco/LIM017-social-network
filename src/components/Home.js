// eslint-disable-next-line import/no-cycle
import { onNavigate } from "../main.js";
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

  btnLogOut.textContent = "Cerrar Sesión";
  btnSave.textContent = "Guardar";

  btnLogOut.addEventListener("click", () => {
    logOut();
  });

<<<<<<< HEAD
  formPublication.addEventListener("submit", (e) => {
    e.preventDefault();
    publication(publicationTitle.value, publicationText.value);
    formPublication.reset();
  });

  getPublication()
    .then((data) => {
      postsTemplate(data, containerPublication);
    })
    .catch((err) => {
      console.log(err);
    });

  // getPublication()
  // .then( (data) => {
  //   containerPublication.innerHTML = postsTemplate(data);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });

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
=======
  nameDiv.textContent ='Nombre'

  formPublication.addEventListener('submit', (e) => {
    e.preventDefault()
    publication( publicationTitle.value, publicationText.value); 
    formPublication.reset();
});

getPublication()
<<<<<<< HEAD
.then((data) => {
 postsTemplate(data, containerPublication);
=======
.then( (data) => {
  postsTemplate(data,containerPublication);
>>>>>>> fb3e2363799e4413d71a3e59aaccedcbd0e395c3
})
.catch((err) => {
  console.log(err);
});

<<<<<<< HEAD
// getUser()
// .then((data) => {
//   userTemplate(data, nameDiv);
// })
// .catch((err) => {
//   console.log(err);
=======

// getPublication()
// .then( (data) => {
//   containerPublication.innerHTML = postsTemplate(data);
// })
// .catch((err) => {
//   console.log(err);
// });

// postsTemplate();
// const getPost = () => {
// let postsCollection =[];
// const getPostsCollection = getPublication();
// getPostsCollection.forEach((doc) => {
//   let  newElement = documento.createElement( `${doc.data().title}`); 
//   let a = containerPublicationP.innerHTML = newElement;
>>>>>>> fb3e2363799e4413d71a3e59aaccedcbd0e395c3
// });
>>>>>>> upstream/main

  loginDiv.appendChild(profileDiv);
  profileDiv.appendChild(imgProfile);
  loginDiv.appendChild(nameDiv);
  loginDiv.appendChild(formPublication);
  formPublication.appendChild(publicationTitle);
  formPublication.appendChild(publicationText);
  formPublication.appendChild(btnSave);
  loginDiv.appendChild(containerPublication);
<<<<<<< HEAD
  containerPublication.appendChild(containerPublicationP);
  containerPublication.appendChild(containerPublicationD);

  return loginDiv;
};

window.addEventListener("DOMContentLoaded", () => {
  getPublication();
});
=======
  loginDiv.appendChild(btnLogOut);

 
  return loginDiv;
}

<<<<<<< HEAD
// window.addEventListener('DOMContentLoaded', () => {
//    getPublication();
//   });
=======
window.addEventListener('DOMContentLoaded', () => {
   getPublication();
  });


>>>>>>> fb3e2363799e4413d71a3e59aaccedcbd0e395c3
>>>>>>> upstream/main
