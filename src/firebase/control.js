/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';

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

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

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
