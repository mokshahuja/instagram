// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBVCZZAb2EyCIZsryEfCImicnRpRTh5v4M",
  authDomain: "instagram-dda12.firebaseapp.com",
  databaseURL: "https://instagram-dda12.firebaseio.com",
  projectId: "instagram-dda12",
  storageBucket: "instagram-dda12.appspot.com",
  messagingSenderId: "686095009013",
  appId: "1:686095009013:web:88d21435cc4d5dfe0cb1bc",
  measurementId: "G-GZRZBX6011",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
