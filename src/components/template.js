export function postsTemplate(doc, place) {
  place.innerHTML = '';
  doc.forEach((e) => {
    place.innerHTML += `
  <div class = "containerPublicationDiv" >
    <div class = "containerPosts">
    <p>${e.data().timestamp.toDate().toLocaleTimeString('es-PE')} </p>
      <h3 class = "titlePost"> ${e.data().title}</h3>
      <p class = "descriptionPosts"> ${e.data().text}</p>
      <p class = "authorPublication"> Autor: ${e.data().author} </p> 
      <button class = "btnsDelete" data-id = "${e.id}">Eliminar</button>
      <button class = "btnsEdit" data-id ="${e.id}"> Editar </button>
      <button class = "btnsLikes" > 
      <span id = "iconLike" > Me Gusta </span>
      <span id = "count" > 0 </span></button>
     </div>
  </div>`;
   })
};