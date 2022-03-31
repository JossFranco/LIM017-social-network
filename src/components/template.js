// import { template } from "@babel/core";
// export function  postsTemplate(data) {
//   return `<h3> Título: ${data.title}</h3>
//   <p> Descripción: ${data.text}</p>`
  
// };





// import { getPublication, } from '../firebase/firestore.js';
// const finalData = getPublication();
// console.log(finalData);

export function postsTemplate (data,place) {
  for (let i in data){
 place.innerHTML += `<div> <h3> Titulo: ${i.title}</h3>
 <p> Descripción: ${i.text}</p> </div>`;
 }
}

// const place = document.getElementById('root')
// postsTemplate(place);

//     postsTemplate();




    
    // template = `<h3> Titulo: ${title}</h3>
    // <p> Descripción: ${text}</p>`
    // return template;


// export function createMenuItem(doc) {
//     let liTitle = document.createElement('li');
//     liTitle.textContent = doc.data().title;
//     let liText = document.createElement('li');
//     liText.textContent = doc.data().text;
//     let result = liTitle + liText
//     return result;
