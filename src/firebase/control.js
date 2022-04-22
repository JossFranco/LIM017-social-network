<<<<<<< HEAD
=======
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js'
import { auth } from '../config/firebase.config.js'

>>>>>>> upstream/main
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

<<<<<<< HEAD
import { initializeApp } from './auth.js';

// export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
=======
export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js'
export{
  getAuth
};
>>>>>>> upstream/main

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
  signOut
}

export const provider = new GoogleAuthProvider();
<<<<<<< HEAD

// eslint-disable-next-line func-names
export const registerEmail = function (email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const sendEmail = function () {
  return sendEmailVerification(auth.currentUser);
};

export const registerGoogle = function () {
  return signInWithPopup(auth, provider);
};

export const logInEmail = function (email, password) {
  return signInWithEmailAndPassword(auth, email, password);
};

export const userLogOut = function () {
  return signOut(auth);
};
=======
>>>>>>> upstream/main
