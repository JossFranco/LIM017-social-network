export function postsTemplate(doc, place) {
  place.innerHTML = '';
  doc.forEach((e) => {
    place.innerHTML += `
  <div class = "containerPublicationDiv" >
    <div class = "containerPosts">
      <div class = "containerDate">
        <p class = "dateStyle" >${e.data().timestamp.toDate().toDateString()} </p> 
        <p class = "dateStyle"  >${e.data().timestamp.toDate().toLocaleTimeString('es')} </p>
      </div>
      <h3 class = "titlePost"> ${e.data().title}</h3>
      <p class = "descriptionPosts"> ${e.data().text}</p>
      <p class = "authorPublication" id = "author"> <img src="./Image/imgPerfil.png" class = "imgAuthor" alt="user"> ${e.data().author} </p> 
      <div class = "containerBtns" id ="containerBtns">
      <button class = "btnsDelete btnsStyle" data-id = "${e.id}" ${e.data().author===localStorage.getItem('email')? '':'disabled'} > Eliminar </i></button>
      <button class = "btnsEdit btnsStyle" data-id ="${e.id}" ${e.data().author===localStorage.getItem('email')? '':'disabled'}> Editar </i></button>
      <button class = "btnsLikes btnsStyle" } > 
      <span id = "iconLike" > Me Gusta </span><span id = "count" >${e.data().likes.length}</span></button>
      </div>
     </div>
  </div>`;
  });
}
