import firebase from 'firebase'
require("@firebase/firestore")


const firebaseConfig = {
  apiKey: "AIzaSyDp8gOYmLt5MvEkUDpAYSFRjhhxmTQCcBg",
  authDomain: "complaint-forum-ecfec.firebaseapp.com",
  projectId: "complaint-forum-ecfec",
  storageBucket: "complaint-forum-ecfec.appspot.com",
  messagingSenderId: "768187044691",
  appId: "1:768187044691:web:13b4a2f022206ed38087a6"
};

// Initialize Firebase
firebase. initializeApp(firebaseConfig);

export default  firebase.firestore()
