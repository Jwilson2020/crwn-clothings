import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

const Config = {
  apiKey: "AIzaSyDyJP5bMmRZnSCAItHnbHNuHAXjv-DR84s",
  authDomain: "crown-db-c00e9.firebaseapp.com",
  projectId: "crown-db-c00e9",
  storageBucket: "crown-db-c00e9.appspot.com",
  messagingSenderId: "649449422968",
  appId: "1:649449422968:web:6ad9d3521c4a77c1c6ed8d",
  measurementId: "G-4MY3V36HFR",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();
  
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const CreatedAt = new Date();
    
    try {
      await userRef.set({
          displayName,
          email,
          CreatedAt,
          ...additionalData
          
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
    
  }
  return userRef;
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
