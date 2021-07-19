import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
  apiKey: "AIzaSyBSZTohkYDgpPL6jHZwisU7CO2QipLdRmI",
  authDomain: "cursoredux-2bc60.firebaseapp.com",
  projectId: "cursoredux-2bc60",
  storageBucket: "cursoredux-2bc60.appspot.com",
  messagingSenderId: "747418231846",
  appId: "1:747418231846:web:dbc2cfddae401a7e86f2e7",
  measurementId: "G-DMB56C6N34",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore().collection("favs");

export function getFavs(uid) {
  return db
    .doc(uid)
    .get()
    .then((snap) => {
      return snap.data().array;
    });
}

export function updateDB(array, uid) {
  return db.doc(uid).set({ array });
}
//   firebase.analytics();

export function signOutGoogle() {
  firebase.auth().signOut();
}

export function loginWithGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((snap) => snap.user);
}
