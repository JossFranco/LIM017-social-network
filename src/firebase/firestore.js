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
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

const db = getFirestore();

export const publication =  async (title, text, user) => {
return await addDoc(collection(db, 'posts'), { title, text, user, likes});
}

export const getPublication = async () => {
  let  postsCollection = [];
  const querySnapshot = await getDocs(collection(db, 'posts'));
  querySnapshot.forEach((doc) => {
   postsCollection.push(doc);
   console.log(doc);
   console.log(doc.data());
  });
  console.log(postsCollection);
    return  postsCollection
}

export const onGetPublication = (callback) => onSnapshot(collection(db, 'posts'), callback);

export const deletePublication = (id) => deleteDoc(doc(db, 'posts', id));

  /* ñ */
/* export const onGetPost = () => console.log ("onGetPost")
export {
  onSnapshort, */
export const getPost = (id)=> getDoc(doc(db, 'posts', id));

export const updatePublication = (id, newField) => updateDoc(doc(db, 'posts', id), newField);

// export const likes =  async (user) => {
//   return await addDoc(collection(db, 'likes'), { user});
//   }

//   export const getLikes = async () => {
//     let  likesCollection = [];
//     const querySnapshot = await getDocs(collection(db, 'likes'));
//     querySnapshot.forEach((doc) => {
//      likesCollection.push(doc);
//      console.log(doc);
//      console.log(doc.data());
//     });
//     console.log(likesCollection);
//       return  likesCollection
//   }

//   export const onGetLikes = (callback) => onSnapshot(collection(db, 'likes'), callback);