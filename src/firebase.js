import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBz63lOX-IxD8I8t-kLv_KqUFeECEh2dJg",
  authDomain: "slack-clone-da635.firebaseapp.com",
  projectId: "slack-clone-da635",
  storageBucket: "slack-clone-da635.appspot.com",
  messagingSenderId: "419582822657",
  appId: "1:419582822657:web:38df51e6232360ef6b3300"
};
  const FirebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider,db};


