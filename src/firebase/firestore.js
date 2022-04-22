import {
  // getFirestore,
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
} from './control.js';
import { db } from '../config/firebase.config.js'

// const db = getFirestore();

export const publication = async (title, text) => await addDoc(collection(db, 'posts'), {
  title,
  text,
  author: localStorage.getItem('email'),
  likes: [],
  timestamp: serverTimestamp(),
});

const orderPublication = query((collection(db, 'posts')), orderBy('timestamp', 'desc'));

export const getPublication = async () => {
  const postsCollection = [];
  const querySnapshot = await getDocs(orderPublication);
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
