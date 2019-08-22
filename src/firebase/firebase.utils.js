import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBitQ1Pi87T6TMw2jdcrLe3KHy9cPfLStY",
    authDomain: "vcart-249f5.firebaseapp.com",
    databaseURL: "https://vcart-249f5.firebaseio.com",
    projectId: "vcart-249f5",
    storageBucket: "vcart-249f5.appspot.com",
    messagingSenderId: "391799479092",
    appId: "1:391799479092:web:c09cecc5fa4903af"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;