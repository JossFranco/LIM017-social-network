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
// eslint-disable-next-line import/no-cycle
import { onNavigate } from "../main.js";

const auth = getAuth();
export const registerWithEmail = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user) {
        const uid = user.uid;
        sendEmailVerification(auth.currentUser).then(() => {
          // Email verification sent!
          // ...
        });
        onNavigate("/");
      } else {
        console.log("no existe");
        onNavigate("/");
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

const provider = new GoogleAuthProvider();
export const registerWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorMessage);
    });
};

export const loginWithEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

export const emailAuthState = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(user);
      onNavigate("/login");
    } else {
      console.log("no existe");
      onNavigate("/");
    }
  });
};

export const logOut = () => {
  signOut(auth)
    .then(() => {
      console.log("Salir");
      onNavigate("/");
    })
    .catch((error) => {
      console.log(error);

    });
};
