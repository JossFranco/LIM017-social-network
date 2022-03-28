import {
    getFirestore,
    collection,
    addDoc,  
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

  const db = getFirestore();

  export const publication = (title, text) => 
    addDoc(collection(db, "tasks"), { title, text });
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
  