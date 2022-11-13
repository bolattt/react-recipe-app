import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbxo__R6ufejiqHCeE9sjLHraoI2QXB-o",
  authDomain: "cooking-panda-site.firebaseapp.com",
  projectId: "cooking-panda-site",
  storageBucket: "cooking-panda-site.appspot.com",
  messagingSenderId: "91498258447",
  appId: "1:91498258447:web:e7e083af883f7d4c6a037a",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
