// import { template } from "@babel/core";
// export function  postsTemplate(data) {
//   return `<h3> Título: ${data.title}</h3>
//   <p> Descripción: ${data.text}</p>`
  
// };

// import { getPublication, } from '../firebase/firestore.js';
<<<<<<< HEAD
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
=======
// const finalData = getPublication();
// console.log(finalData);





// export function postsTemplate (data,place) {
//   for (let i in data){
//     console.log(i.text, i.title)
//  place.innerHTML += `<div> <h3> Titulo: ${i.title}</h3>
//  <p> Descripción: ${i.text}</p> </div>`;
//  }
// }


export function postsTemplate (data,place) {
  data.forEach((e,i)=>{
    // console.log(i.text, i.title)
 place.innerHTML += `<div> <h3> Titulo: ${data[i].title}</h3>
 <p> Descripción: ${data[i].text}</p> </div><br>`;
 })
};

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
>>>>>>> fb3e2363799e4413d71a3e59aaccedcbd0e395c3
