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
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

const db = getFirestore();
 


export const publication =  async (title, text) => {
return await addDoc(collection(db, 'posts'), { 
  title,
  text,
  author:  localStorage.getItem("email"), 
  likes:[], 
  timestamp: serverTimestamp()
});
}

const orderPublication = query((collection(db, 'posts')), orderBy('timestamp', 'desc'));

export const getPublication = async () => {
  let  postsCollection = [];
  const querySnapshot = await getDocs(orderPublication);
  querySnapshot.forEach((doc) => {
   postsCollection.push(doc);
   console.log(doc);
   console.log(doc.data());
   console.log('noviembre');
   console.log(doc.data().likes)
  });
    return  postsCollection
}

export const onGetPublication = (callback) => onSnapshot(collection(db, 'posts'), callback);

export const deletePublication = (id) => deleteDoc(doc(db, 'posts', id));

export const getPost = (id) => getDoc(doc(db, 'posts', id));

export const updatePublication = (id, newField) => updateDoc(doc(db, 'posts', id), newField);

const likesRef = doc(db, 'posts', 'likes');

console.log('noviembre');
console.log(likesRef);
console.log('noviembre')

export const addLike =  async () => {
  return await updateDoc(likesRef, {
  likes: arrayUnion(localStorage.getItem("email"))
})
};
export const removeLike =  async () => {
  return await updateDoc(likesRef, {
  likes: arrayRemove(localStorage.getItem("email"))
})
};