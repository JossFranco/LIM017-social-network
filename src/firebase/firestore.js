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

// eslint-disable-next-line no-return-await
export const publication = async (title, text) => await addDoc(collection(db, 'posts'), {
  title,
  text,
  author: localStorage.getItem('email'),
  likes: [],
  timestamp: serverTimestamp(),
});

const orderPublication = query(
  collection(db, 'posts'),
  orderBy('timestamp', 'desc'),
);

export const getPublication = async () => {
  const postsCollection = [];
  const querySnapshot = await getDocs(orderPublication);
  // eslint-disable-next-line no-shadow
  querySnapshot.forEach((doc) => {
    postsCollection.push(doc);
  });
  return postsCollection;
};

export const onGetPublication = (callback) => onSnapshot(collection(db, 'posts'), callback);

export const deletePublication = (id) => deleteDoc(doc(db, 'posts', id));

export const getPost = (id) => getDoc(doc(db, 'posts', id));

export const updatePublication = (id, newField) => updateDoc(doc(db, 'posts', id), newField);

export const addLike = (emailId) => arrayUnion(emailId);

export const removeLike = (emailId) => arrayRemove(emailId);
