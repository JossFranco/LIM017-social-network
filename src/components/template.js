export function postsTemplate(doc, containerPost) {
  containerPost.innerHTML = '';
  doc.forEach((docPosts) => {
    containerPost.innerHTML += `
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
      <button class="btnsDelete btnsStyle" id="btnsDelete" data-id = "${docPosts.id}" ${docPosts.data().author === localStorage.getItem('email') ? '' : 'disabled'} >Eliminar <i class="fa-regular fa-trash-can"></i></button>
      <button class = "btnsEdit btnsStyle" data-id ="${docPosts.id}" ${docPosts.data().author === localStorage.getItem('email') ? '' : 'disabled'}>Editar <i class="fa-regular fa-pen-to-square"></i> </i></button>
      <button class = "btnsLikes btnsStyle ${docPosts.data().likes.includes(localStorage.getItem('email')) ? 'btnLikeBlue' :'' }" data-id ="${docPosts.id}"} > 
      <span id = "count" >  ${docPosts.data().likes.length}  </span><span id = "iconLike" class = "iconLike" > Me gusta <i class="fa-regular fa-thumbs-up"></i></span></button>
      </div>
     </div>
  </div>`;
  });
}
