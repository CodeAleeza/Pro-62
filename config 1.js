import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDA2M2p-7yib5qB4XU7J5x2ouhfLc9Koaw",
  authDomain: "attendance-e2a34.firebaseapp.com",
  databaseURL: "https://attendance-e2a34-default-rtdb.firebaseio.com",
  projectId: "attendance-e2a34",
  storageBucket: "attendance-e2a34.appspot.com",
  messagingSenderId: "25553360598",
  appId: "1:25553360598:web:c7941e1b33f2ae9bdd1b77"
};

  firebase.initializeApp(firebaseConfig)

  export default firebase.database()
 

  