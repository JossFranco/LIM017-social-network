export function postsTemplate (doc, place) {
  place.innerHTML= '';
  doc.forEach((docPosts) => {
  place.innerHTML += `
  <div class = "containerPublicationDiv" >
    <div class = "containerPosts">
      <div class = "containerDate">
        <p class = "dateStyle" >${docPosts.data().timestamp.toDate().toDateString()} </p> 
        <p class = "dateStyle"  >${docPosts.data().timestamp.toDate().toLocaleTimeString('es')} </p>
      </div>
      <h3 class = "titlePost"> ${docPosts.data().title}</h3>
      <p class = "descriptionPosts"> ${docPosts.data().text}</p>
      <p class = "authorPublication" id = "author"> <img src="./Image/imgPerfil.png" class = "imgAuthor" alt="user"> ${docPosts.data().author} </p> 
      <div class = "containerBtns" id ="containerBtns">
      <button class = "btnsDelete btnsStyle" data-id = "${docPosts.id}" ${docPosts.data().author===localStorage.getItem('email')? '':'disabled'} > Eliminar </i></button>
      <button class = "btnsEdit btnsStyle" data-id ="${docPosts.id}" ${docPosts.data().author===localStorage.getItem('email')? '':'disabled'}> Editar </i></button>
      <button class = "btnsLikes btnsStyle" data-id ="${docPosts.id}"} > 
      <span id = "iconLike" > Me Gusta </span><span id = "count" >${docPosts.data().likes.length}</span></button>
      </div>
     </div>
  </div>`;
  });
}
