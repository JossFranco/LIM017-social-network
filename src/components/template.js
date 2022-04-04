// import { getPublication, } from '../firebase/firestore.js';
export function  postsTemplate(data, place) {
  data.forEach((e , i) => {
  place.innerHTML += `<div class = "containerPosts"><h3 class = "titlePost"> ${data[i].title}</h3>
  <p class = "descriptionPosts"> ${data[i].text}</p></div>`;
   })
};

// export function  userTemplate(data, place) {
//   data.forEach((e , i) => {
//   place.innerHTML += `<div class = "containerUser"><h3 class = "userData"> ${data[i].user}</h3></div>`;
//    })
// };