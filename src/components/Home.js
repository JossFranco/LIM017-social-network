// eslint-disable-next-line import/no-cycle
import { logOut } from "../firebase/auth.js";
import { userLogOut } from "../firebase/control.js";

import {
  publication,
  getPublication,
  onGetPublication,
  deletePublication,
  getPost,
  updatePublication,
  addLike,
  // removeLike,
  // addArrLikes,
} from "../firebase/firestore.js";

import { postsTemplate } from "./template.js";

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

  btnLogOut.textContent = "Cerrar Sesión";
  btnSave.textContent = "Publicar";
  nameDiv.textContent = localStorage.getItem("email");

  btnLogOut.addEventListener("click", () => {
    logOut();
  });

  let editStatus = false;
  let id = "";
  formPublication.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!editStatus && publicationTitle.value !== "" &&  publicationText.value !== "") {
      publication(publicationTitle.value, publicationText.value);
    } else if (!editStatus && publicationTitle.value === "") {
      errorPublication.textContent = "- Debe agregar el título";
      publicationTitle.setAttribute("id", "postTitle");
    } else if (!editStatus && publicationText.value === "") {
      errorPublication.textContent = "- Debe agregar descripción";
    } else {
      updatePublication(id, { title: publicationTitle.value, text: publicationText.value,
      });
      editStatus = false;
      btnSave.textContent = "Publicar";
    }
    formPublication.reset();
  });

  onGetPublication((querySnapshot) => {
    getPublication()
      .then(async (data) => {
        postsTemplate(data, containerPublication);
        // //  const dataLike = data.data().likes;
        //  console.log('....');
        //  console.log(dataLike);
        //  console.log('----');

        const btnsDelete = containerPublication.querySelectorAll(".btnsDelete");
        const btnsEdit = containerPublication.querySelectorAll(".btnsEdit");
        const btnsLikes = containerPublication.querySelectorAll(".btnsLikes");
        btnsLikes.forEach((btn) => {
          btn.addEventListener("click", async ()=> {
            let emailId = localStorage.getItem("email");
            await addLike(emailId);
            console.log("aqui no sdss");
          });
        });

        btnsDelete.forEach((btn) => {
          btn.addEventListener("click", async ({ target: { dataset } }) => {
            await deletePublication(dataset.id);
          });
        });

        btnsEdit.forEach((btn) => {
          btn.addEventListener("click", async (e) => {
            const doc = await getPost(e.target.dataset.id);
            const publication = doc.data();
            publicationTitle.value = publication.title;
            publicationText.value = publication.text;
            editStatus = true;
            id = e.target.dataset.id;
            btnSave.textContent = "Actualizar";
2            formPublication.reset();
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
  loginDiv.appendChild(containerPublication);
  loginDiv.appendChild(postDiv);
  loginDiv.appendChild(btnLogOut);

  return loginDiv;
};
