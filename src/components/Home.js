// eslint-disable-next-line import/no-cycle
import { logOut } from '../firebase/auth.js';
import { userLogOut } from '../firebase/control.js';

import {
  publication,
  getPublication,
  onGetPublication,
  deletePublication,
  getPost,
  updatePublication,
  getDocLikes,
  addLike,
  removeLike,
  
} from "../firebase/firestore.js";

import { postsTemplate } from './template.js';

export const home = () => {
  const loginDiv = document.createElement("div");
  loginDiv.setAttribute("class", "loginDiv");
  const profileDiv = document.createElement("div");
  profileDiv.setAttribute("class", "profileDiv");
  const imgProfileDiv = document.createElement("IMG");
  imgProfileDiv.setAttribute("src", "./Image/fondoCiudad.PNG");
  imgProfileDiv.setAttribute("class", "imgProfileDiv");
  const imgProfile = document.createElement("IMG");
  imgProfile.setAttribute("src", "./Image/22Perfil.png");
  imgProfile.setAttribute("class", "imgProfile");
  const nameDiv = document.createElement("div");
  nameDiv.setAttribute("class", "nameDiv");
  const btnLogOut = document.createElement("button");
  btnLogOut.setAttribute("class", "btnLogOut");
  const postDiv = document.createElement("div");
  const formPublication = document.createElement("form");
  formPublication.setAttribute("class", "formPublication");
  // formPublication.setAttribute("id", "formPublication");
  const publicationTitle = document.createElement("input");
  publicationTitle.setAttribute("placeholder", "¿Qué quieres compartir?");
  publicationTitle.setAttribute("class", "publicationTitle");
  const publicationText = document.createElement("textarea");
  publicationText.setAttribute("placeholder", "Escribe aquí");
  publicationText.setAttribute("class", "publicationText");
  publicationText.setAttribute("rows", "5");
  const btnSave = document.createElement("button");
  btnSave.setAttribute("class", "btnSave");
  btnSave.setAttribute("id", "btnSave");
  const containerPublication = document.createElement("div");
  const errorPublication = document.createElement("div");
  errorPublication.setAttribute("class", "errorPublication");

  const formEdit= document.createElement("form");
  formEdit.setAttribute("class", "formPublication formEdit");
  formEdit.setAttribute("id", "formEdit");

  const editTitle = document.createElement("input");
  editTitle.setAttribute("placeholder", "¿Qué quieres compartir?");
  editTitle.setAttribute("class", "publicationTitle");
  const editText = document.createElement("textarea");
  editText.setAttribute("placeholder", "Escribe aquí");
  editText.setAttribute("class", "publicationText");
  editText.setAttribute("rows", "5");

  const btnUpdate = document.createElement("button");
  btnUpdate.setAttribute("class", "btnSave");
  btnUpdate.setAttribute("id", "btnSave");

  btnLogOut.textContent = "Cerrar Sesión";
  btnSave.textContent = "Publicar";
  nameDiv.textContent = localStorage.getItem("email");

  btnLogOut.addEventListener("click", () => {
    logOut();
  });

  let editStatus = false;
  let id = '';
  formPublication.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!editStatus && publicationTitle.value !== '' && publicationText.value !== '') {
      publication(publicationTitle.value, publicationText.value);
    } else if (!editStatus && publicationTitle.value === "") {
      errorPublication.textContent = "- Debe agregar el título";
      publicationTitle.setAttribute("id", "postTitle");
    } else if (!editStatus && publicationText.value === "") {
      errorPublication.textContent = "- Debe agregar descripción";
    } 
      editStatus = false;
    formPublication.reset();
  });

  formEdit.addEventListener("submit", (e) => {
    e.preventDefault();
//   if(btnsLikes.setAttribute('class', 'btnsLikesRed')){
//     btnsLikes.setAttribute('class', 'btnsLikesGrey')
//   } else {
//     btnsLikes.setAttribute('class', 'btnsLikesRed');
//   }
// };
console.log('user / btn me gusta en camino');
const userId = localStorage.getItem("email");
console.log(userId);
console.log('user / btn me gusta en camino');

  onGetPublication(() => {
    getPublication()
      .then(async (data) => {
        postsTemplate(data, containerPublication);
        
        const btnsDelete = containerPublication.querySelectorAll(".btnsDelete");
        const btnsEdit = containerPublication.querySelectorAll(".btnsEdit");
        const btnsLikes = containerPublication.querySelectorAll(".btnsLikes");
        btnsLikes.forEach((btn) => {
          btn.addEventListener("click", async (e)=> {
            const userId = localStorage.getItem("email");
            const doc = await  getPost(e.target.dataset.id);
            console.log('me gusta en camino');
            console.log(doc);
            console.log(userId);
            console.log('me gusta en camino');

            id = doc.id;
            const dataCollection = doc.data();
            if(dataCollection.likes.includes(userId)){
              await updatePublication(userId)(id,{
                likes: removeLike(userId),
              });
            }else{
              await updatePublication(userId)(id,{
                likes: addLike(userId),
              });
            }
          });
        });

        btnsDelete.forEach((btn) => {
          btn.addEventListener('click', async ({ target: { dataset } }) => {
            await deletePublication(dataset.id);
          });
        });

        btnsEdit.forEach((btn) => {
          btn.addEventListener("click", async (e) => {
            formPublication.setAttribute("class", "formHidden")
            document.getElementById('formEdit').style.display ='block';
            const doc = await getPost(e.target.dataset.id);
            const publication = doc.data();
            editTitle.value = publication.title;
            editText.value = publication.text;
            editStatus = true;
            id = e.target.dataset.id;
            btnUpdate.textContent = "Actualizar";
            btnUpdate.setAttribute("class", "btnUpdate");
            formPublication.reset();
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  btnUpdate.addEventListener('click', () =>{
    formPublication.setAttribute("class", "formPublication ");
    document.getElementById('formEdit').style.display ='none';
  });
  

  loginDiv.appendChild(profileDiv);
  profileDiv.appendChild(imgProfileDiv);
  profileDiv.appendChild(imgProfile);
  loginDiv.appendChild(nameDiv);
  loginDiv.appendChild(formPublication);
  formPublication.appendChild(publicationTitle);
  formPublication.appendChild(publicationText);
  formPublication.appendChild(errorPublication);
  formPublication.appendChild(btnSave);
  formEdit.appendChild(editTitle);
  formEdit.appendChild(editText);
  formEdit.appendChild(btnUpdate);
  loginDiv.appendChild(formEdit);
  loginDiv.appendChild(containerPublication);
  loginDiv.appendChild(postDiv);
  loginDiv.appendChild(btnLogOut);
  loginDiv.appendChild(footer);

  return loginDiv;
};
