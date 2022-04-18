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
  arrayUnion,
  arrayRemove,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

const db = getFirestore();

export const publication = async (title, text) => {
  return await addDoc(collection(db, 'posts'), { 
    title,
    text,
    author: localStorage.getItem('email'),
    likes: [],
    timestamp: serverTimestamp(),
  });
};

const orderPublication = query((collection(db, 'posts')), orderBy('timestamp', 'desc'));

export const getPublication = async () => {
  const postsCollection = [];
  const querySnapshot = await getDocs(orderPublication);
  querySnapshot.forEach((doc) => {
   postsCollection.push(doc);
  //  console.log('noviembre');
  //  console.log(doc.data().likes)
  //  console.log('diciembre');
  });
  return postsCollection;
};
// const arrLikes =[];
// export const addArrLikes =  (emailId) => arrLikes.splice(emailId);

export const onGetPublication = (callback) => onSnapshot(collection(db, 'posts'), callback);

export const deletePublication = (id) => deleteDoc(doc(db, 'posts', id));

export const getPost = (id) => getDoc(doc(db, 'posts', id));

export const updatePublication = (id, newField) => updateDoc(doc(db, 'posts', id), newField);

export const getDocLikes = (id) => {
  return getDoc(doc(db, 'posts', id));
};

export const addLike =  (emailId) => {return arrayUnion(emailId); };

export const removeLike =  (emailId) => {return  arrayRemove(emailId); } ;


// export const getLikes = async (id) => {
//   let  likesCollection = [];
//   let  docLikesCollection = [];
//   const coleccion = await getDocs(doc(collection(db, 'posts', id)));
//   coleccion.forEach((doc) => {
//    likesCollection.push(doc);
//    docLikesCollection = doc.data().likes;
//    console.log('enero');
//    console.log(docLikesCollection);
//    console.log('febrero');
//   });
//     return  docLikesCollection
// }
