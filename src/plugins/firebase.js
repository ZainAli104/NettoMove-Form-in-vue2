import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBxz3cIHBhKRT1bm3JQrATqA-DyjCF4CbY",
  authDomain: "netto-move.firebaseapp.com",
  projectId: "netto-move",
  storageBucket: "netto-move.appspot.com",
  messagingSenderId: "791792649023",
  appId: "1:791792649023:web:38868642321f1f04ecc98a",
};

firebase.initializeApp(firebaseConfig);
