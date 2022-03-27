/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    sendEmailVerification,
    onAuthStateChanged,
    signOut,
    // eslint-disable-next-line import/no-unresolved
  } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
  
  const auth = getAuth();
  
  export const registerEmail = function (email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  export const sendEmail = function () {
    return sendEmailVerification(auth.currentUser);
  };
  
  const provider = new GoogleAuthProvider();
  
  export const registerGoogle = function () {
    return signInWithPopup(auth, provider);
  };
  
  export const logInEmail = function (email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  };
  
  export const authState = function () {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        signOut(auth);
      }
    });
  };
  
  export const userLogOut = function () {
    return signOut(auth);
  };
  