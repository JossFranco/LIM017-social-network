import {
  getFirestore,
  collection,
  addDoc,  
  getDocs,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

const db = getFirestore();

export const publication =  async (title, text) => {
return await addDoc(collection(db, 'posts'), { title, text });
}

export const getPublication = async () => {
  let data = 0;
  const getPostsCollection = await getDocs(collection(db, 'posts'));
  getPostsCollection.forEach((doc) => {
    data = doc.data();
    // postsCollection = data;
  
  // // doc.data() is never undefined for query doc snapshots
  // postsCollection.push({ ...doc.id, ...doc.data().title, ...doc.data().text})
  console.log(data);

  });
    return data
}