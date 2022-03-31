import {
    getFirestore,
    collection,
    addDoc,  
    getDocs,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

  const db = getFirestore();

export const publication =  async (title, text) => {
  await addDoc(collection(db, 'posts'), { title, text });
}
  

export const getPublication = async () => {
  let data;
  const getPostsCollection = await getDocs(collection(db, 'posts'));
  getPostsCollection.forEach((doc) => {
  // // doc.data() is never undefined for query doc snapshots
  postsCollection.push({ id: doc.id, ...doc.data()});

  // console.log(doc.data());

  });
    return postsCollection 
}