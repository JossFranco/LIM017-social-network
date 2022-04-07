/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendEmailVerification,
  // onAuthStateChanged,
  signOut,
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
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      console.log(credential);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(credential);
    });
};

export const logInEmail = function (email, password) {
  return signInWithEmailAndPassword(auth, email, password);
};

// export const authState = function () {
//   return onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const uid = user.uid;
//       // ...
//     } else {
//       // User is signed out
//       signOut(auth);
//     }
//   });
// };

export const userLogOut = function () {
  return signOut(auth);
};

export const getUserUid = () => {
  getAuth()
    .getUser(uid)
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
    })
    .catch((error) => {
      console.log("Error fetching user data:", error);
    });
};
