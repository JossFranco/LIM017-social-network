import {
  getFirestore,
  collection,
  addDoc,  
  getDocs,
  onSnapshot,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

const db = getFirestore();

export const publication =  async (title, text) => {
return await addDoc(collection(db, 'posts'), { title, text });
}

export const getPublication = async () => {
  let  postsCollection = [];
  const getPostsCollection = await getDocs(collection(db, 'posts'));
  getPostsCollection.forEach((doc) => {
   postsCollection.push(doc.data());
  });
  console.log(postsCollection);
    return  postsCollection
}

export const user =  async (email, user) => {
  return await addDoc(collection(db, 'userIdCollection'), { email, user });
}

export const getUser = async () => {
    let  userCollection = [];
    const getUserCollection = await getDocs(collection(db, 'userIdColection'));
    getUserCollection.forEach((doc) => {
     userCollection.push(doc.data().user);
    });
    console.log(userCollection);
      return  userCollection
  }

// export const onGetPublication = () => {
//   onSnapshot(collection(db, 'posts'));
// }
