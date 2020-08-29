import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDZL_WJZAeZ2AJmNmhEIoaKfJeNvZ9JrGk",
  authDomain: "my-farms-db.firebaseapp.com",
  databaseURL: "https://my-farms-db.firebaseio.com",
  projectId: "my-farms-db",
  storageBucket: "my-farms-db.appspot.com",
  messagingSenderId: "1070596821824",
  appId: "1:1070596821824:web:47c9cd6238e4b49f5d20a5",
  measurementId: "G-HCYC3KK34E",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
