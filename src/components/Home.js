// eslint-disable-next-line import/no-cycle
import { logOut } from "../firebase/auth.js";

import {
  publication,
  getPublication,
  onGetPublication,
  deletePublication,
  getPost,
  updatePublication,
  // likes,
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

  btnLogOut.textContent = "Cerrar Sesión";
  btnSave.textContent = "Publicar";

  btnLogOut.addEventListener("click", () => {
    logOut();
  });

  nameDiv.textContent = localStorage.getItem("email");

  let editStatus = false;
  let id = "";
 
  let getLikes = [localStorage.getItem("usuario")];
  // let time = updateTimestamp;

  formPublication.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!editStatus) {
      publication(
        publicationTitle.value,
        publicationText.value,
        localStorage.getItem("usuario"),
        // getLikes,
      );
    } else {
      updatePublication(id, {
        title: publicationTitle.value,
        text: publicationText.value,
      });
      editStatus = false;
    }
    formPublication.reset();
  });

  onGetPublication((querySnapshot) => {
    getPublication()
      .then((data) => {
        postsTemplate(data, containerPublication);

        const btnsDelete = containerPublication.querySelectorAll(".btnsDelete");
        console.log(btnsDelete);
        btnsDelete.forEach((btn) => {
          btn.addEventListener("click", ({ target: { dataset } }) => {
            deletePublication(dataset.id);
          });
        });

        const btnsEdit = containerPublication.querySelectorAll(".btnsEdit");
        console.log(btnsEdit);
        btnsEdit.forEach((btn) => {
          btn.addEventListener("click", async (e) => {
            const doc = await getPost(e.target.dataset.id);
            const publication = doc.data();

            publicationTitle.value = publication.title;
            publicationText.value = publication.text;

            editStatus = true;
            id = e.target.dataset.id;
            btnSave.textContent = "Actualizar";
          });
        });

        // const btnsLikes = containerPublication.querySelectorAll(".btnsLikes");
        // const count = containerPublication.querySelectorAll("#count");
        // console.log(btnsLikes);

        // getLikes()
        //   .then(() => {
        //     const user = localStorage.getItem("usuario");
        //     btnsLikes.forEach((btn) => {
        //       btn.addEventListener("click", () => {
        //         if (!data.includes(user) ) {
        //           const likeUser = likes(user);
        //           console.log(likeUser);
        //         } else {
                  
        //         }
        //         count.textContent = data.length;
        //       });
        //     });
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });

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
  formPublication.appendChild(btnSave);
  loginDiv.appendChild(containerPublication);
  loginDiv.appendChild(postDiv);
  loginDiv.appendChild(btnLogOut);

  return loginDiv;
};
