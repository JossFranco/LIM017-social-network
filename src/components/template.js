export function postsTemplate (doc, place) {
  place.innerHTML= '';
  doc.forEach((e) => {
  place.innerHTML += `
  <div class = "containerPublicationDiv" >
    <div class = "containerPosts">
    <p>${e.data().timestamp.toDate().toDateString()} </p>
    <p>${e.data().timestamp.toDate().toLocaleTimeString('es')} </p>
      <h3 class = "titlePost"> ${e.data().title}</h3>
      <p class = "descriptionPosts"> ${e.data().text}</p>
      <p class = "authorPublication" id = "author"> Autor: ${e.data().author} </p> 
      <div class = "containerBtns" id ="containerBtns">
      <button class = "btnsDelete" data-id = "${e.id}" ${e.data().author===localStorage.getItem('email')? '':'disabled'} >Eliminar</button>
      <button class = "btnsEdit" data-id ="${e.id}"  ${e.data().author===localStorage.getItem('email')? '':'disabled'}> Editar </button>
      </div>
      <button class = "btnsLikes"  data-id ="${e.data().likes}" > 
      <span id = "iconLike" > <i class="fa-solid fa-thumbs-up"></i> </span>
      <span id = "count" >${e.data().likes.length}</span></button>
     </div>
  </div>`;
   })
};
