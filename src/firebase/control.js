/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js'

import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
// eslint-disable-next-line import/no-unresolved
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
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

// eslint-disable-next-line import/no-unresolved
export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
export {
  getAuth,
  GoogleAuthProvider,
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
export {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
};
