export function postsTemplate(doc, place) {
  place.innerHTML = '';
  doc.forEach((e) => {
    place.innerHTML += `
  <div class = "containerPublicationDiv" >
    <div class = "containerPosts">
      <h3 class = "titlePost"> ${e.data().title}</h3>
      <p class = "descriptionPosts"> ${e.data().text}</p>
      <button class = "btnsDelete" data-id = "${e.id}">Eliminar</button>
      <button class = "btnsEdit" data-id ="${e.id}"> Editar </button>
      <button class = "btnsLikes" > 
      <span id = "iconLike" > Me Gusta </span>
      <span id = "count" > 0 </span></button>
     </div>
  </div>`;
   })
};