import {
  getFirestore,
  collection,
  addDoc,  
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  serverTimestamp,
  query,
  orderBy,
  where,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
import { async } from 'regenerator-runtime';

const db = getFirestore();
 



// const likes =  async (id) => updateDoc(doc(db, 'posts', id), { likesPost: arrayUnion(id),
// });
// //crear funcion para obtener los likes
// // export const onGetLikes = (callback) => onSnapshot(collection(db, 'likes'), callback);

// const inLikes = async (id, idUserLike) => updateDoc(doc(db, 'posts', id), {
//   likesPost: arrayUnion(idUserLike),
// });

// //crear funcion para remover 
// const desLikes = async (idPost, idUserLike) => updateDoc(doc(db, 'posts', idPost), {
//   likesPost: arrayRemove(idUserLike),
// });


export const publication =  async (title, text) => {
return await addDoc(collection(db, 'posts'), { 
  title,
  text,
  author:  localStorage.getItem("email"), 
  likes: [], 
  timestamp: serverTimestamp()
});
}

const orderPublication = query((collection(db, 'posts')), orderBy('timestamp', 'desc'));

export const getPublication = async () => {
  let  postsCollection = [];
  const querySnapshot = await getDocs(orderPublication);
  querySnapshot.forEach((doc) => {
   postsCollection.push(doc);
  //  console.log(doc);
  //  console.log(doc.data());
  });
    return  postsCollection
}


const idPost = query(collection(db, 'posts'), where('author', '==', localStorage.getItem("email")));
export const  getIdAuthor = async () => {
  let  authorPost = [];
const getIdPost = await getDocs(idPost);
getIdPost.forEach((idData) => {
  authorPost.push(idData.data().author);
  console.log(authorPost[0])
})
return authorPost[0];
}

export const onGetPublication = (callback) => onSnapshot(collection(db, 'posts'), callback);

export const deletePublication = (id) => deleteDoc(doc(db, 'posts', id));

export const getPost = (id) => getDoc(doc(db, 'posts', id));

export const updatePublication = (id, newField) => updateDoc(doc(db, 'posts', id), newField);