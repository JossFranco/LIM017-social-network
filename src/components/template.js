// import { getPublication, } from '../firebase/firestore.js';
export function  postsTemplate(data) {
  return `<h3> Título: ${data.title}</h3>
  <p> Descripción: ${data.text}</p>`
  
};

// export function createMenuItem(doc) {
//     let liTitle = document.createElement('li');
//     liTitle.textContent = doc.data().title;
//     let liText = document.createElement('li');
//     liText.textContent = doc.data().text;
//     let result = liTitle + liText
//     return result;
// }