// import { async } from 'regenerator-runtime';
// import { 
//     publication, 
//     getPublication, 
//     onGetPublication,
//     deletePublication,
//     getPost,
//     updatePublication,
//    } from '../firebase/firestore.js';


//   export const fnPosts = (container) =>{ 
//      container.textContent = postsFn;
//   }
  
//   const postsFn = document.createAttribute('div');
//   const formPublication = document.createElement('form');
//   formPublication.setAttribute('class', 'formPublication');
//   const publicationTitle =  document.createElement('input');
//   publicationTitle.setAttribute('placeholder', 'Título de la Publicación');
//   publicationTitle.setAttribute('class', 'publicationTitle');
//   const publicationText =  document.createElement('textarea');
//   publicationText.setAttribute('placeholder', 'Escribe aquí');
//   publicationText.setAttribute('class', 'publicationText');
//   publicationText.setAttribute('rows', '');
//   const btnSave = document.createElement('button');
//   btnSave.setAttribute('id', 'btnSave');
//   const containerPublication = document.createElement('div');

//   btnSave.textContent = 'Guardar';


//   window.addEventListener('DOMContentLoaded', async () => {

//     onGetPublication((querySnapshot) => {
//         let result = '';
//       querySnapshot.forEach((doc) => {
//           const publicationPosts = doc.data();
//        result +=`<div class = "containerPosts"><h3 class = "titlePost"> ${data[i].title}</h3>
//        <p class = "descriptionPosts"> ${data[i].text}</p></div>
//        <button class = "btnsDelete" data-id = "${doc.id}" > Eliminar </button>
//         <button class = "btnsEdit" data-id = "${doc.id}"> Editar </button> `;
//       });
//       });
  
//   formPublication.addEventListener('submit', (e) => {
//     e.preventDefault()
//     if(!editStatus){
//       publication( publicationTitle.value, publicationText.value, localStorage.getItem('usuario')); 

//     } else { 
//       updatePublication( id,{ 
//         title: publicationTitle.value, 
//         text: publicationText.value, 
//         user: localStorage.getItem('usuario'),
//       });
//       editStatus = false;
//     }

//     formPublication.reset();

// });

// let editStatus = false;
// let id = '';

// onGetPublication((querySnapshot) =>{
// getPublication()
// .then((data) => { 
//  postsTemplate(data, containerPublication);
//  const btnsDelete = containerPublication.querySelectorAll('.btnsDelete');
//  console.log(btnsDelete);
//  btnsDelete.forEach( btn => {
//    btn.addEventListener('click', ({target: {dataset}}) => {
//     deletePublication(dataset.id)
//    })
//  })
//  const btnsEdit = containerPublication.querySelectorAll('.btnsEdit');
//  console.log(btnsEdit);
//  btnsDelete.forEach((btn) => {
//    btn.addEventListener('click', async (e) => {
//     const doc = await getPost(e.target.dataset.id);
//     const publication = doc.data();

//     publicationTitle.value = publication.title;
//     publicationText.value = publication.text;

//     editStatus = true;
//     id = e.target.dataset.id;
//     btnSave.textContent = 'Actualizar';

//   })
// })
// })
// .catch((err) => {
//   console.log(err);
// });
// });
// })

//   postsFn.appendChild(formPublication);
//   formPublication.appendChild(publicationTitle);
//   formPublication.appendChild(publicationText);
//   formPublication.appendChild(btnSave);
//   postsFn.appendChild(containerPublication);
