/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js'
import { auth } from '../config/firebase.config.js'
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';

/* export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';  */

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

export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js'
export {
  getAuth,
};

export {
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
};

// export const auth = getAuth(app);
export{
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
};

export const provider = new GoogleAuthProvider();
