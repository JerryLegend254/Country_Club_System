const { initializeApp } = require('firebase/app');
const { getFirestore } =  require("firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyCJDzCsgQmzPp6eDgH5oxNf5y6tVeVvhPo",
  authDomain: "tutorial-faf1d.firebaseapp.com",
  projectId: "tutorial-faf1d",
  storageBucket: "tutorial-faf1d.appspot.com",
  messagingSenderId: "82835629324",
  appId: "1:82835629324:web:16cdc4b06727754a59d529",
  measurementId: "G-2CTKEY2FN7"
};
const firebaseapp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseapp);

module.exports = {
  db
};