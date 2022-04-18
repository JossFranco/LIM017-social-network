export function postsTemplate(doc, place) {
  // eslint-disable-next-line no-param-reassign
  place.innerHTML = '';
  doc.forEach((docPosts) => {
    // eslint-disable-next-line no-param-reassign
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
      <button class = "btnsDelete btnsStyle" data-id = "${docPosts.id}" ${docPosts.data().author === localStorage.getItem('email') ? '' : 'disabled'} ><i class="fa-regular fa-trash-can"></i></button>
      <button class = "btnsEdit btnsStyle" data-id ="${docPosts.id}" ${docPosts.data().author === localStorage.getItem('email') ? '' : 'disabled'}> <i class="fa-regular fa-pen-to-square"></i> </i></button>
      <button class = "btnsLikes btnsStyle btnLikeBlue" data-id ="${docPosts.id}"} > 
      <span id = "iconLike" class = "iconLike" ><i class="fa-regular fa-thumbs-up"></i></span><span id = "count" >  ${docPosts.data().likes.length}</span></button>
      </div>
     </div>
  </div>`;
  });
}
