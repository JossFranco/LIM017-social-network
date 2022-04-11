export function postsTemplate (doc, place) {
  place.innerHTML= '';
  doc.forEach((e) => {
  place.innerHTML += `
  <div class = "containerPublicationDiv" >
    <div class = "containerPosts">
    <p>${e.data().timestamp.toDate('es')} </p>
    <p>${e.data().timestamp.toDate().toLocaleTimeString('es')} </p>
      <h3 class = "titlePost"> ${e.data().title}</h3>
      <p class = "descriptionPosts"> ${e.data().text}</p>
      <p class = "authorPublication" id = "author"> Autor: ${e.data().author} </p> 
      <div class = "containerBtns" id ="containerBtns">
      <button class = "btnsDelete" data-id = "${e.id}">Eliminar</button>
      <button class = "btnsEdit" data-id ="${e.id}"> Editar </button>
      </div>
      <button class = "btnsLikes" > 
      <span id = "iconLike" > Me Gusta </span>
      <span id = "count" > 0 </span></button>
     </div>
  </div>`;
   })
};

export function authorTemplate (doc) {
  return `${doc.data().author}`;
};