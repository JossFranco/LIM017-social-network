import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

const firebaseConfig = {
  apiKey: 'AIzaSyClhi-ETouKkrcJU2bRmNFetdCZ_0kuNzg',
  authDomain: 'proyectcitytalk.firebaseapp.com',
  projectId: 'proyectcitytalk',
  storageBucket: 'proyectcitytalk.appspot.com',
  messagingSenderId: '615580823373',
  appId: '1:615580823373:web:a7141cbce777fb3e46d104',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);