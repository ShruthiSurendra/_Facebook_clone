import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyB7OMPm_KsC4Fs6Va6TvH9s_HCMdeAhRns",
    authDomain: "facebook-clone-f4f76.firebaseapp.com",
    databaseURL: "https://facebook-clone-f4f76.firebaseio.com",
    projectId: "facebook-clone-f4f76",
    storageBucket: "facebook-clone-f4f76.appspot.com",
    messagingSenderId: "485394854334",
    appId: "1:485394854334:web:b9a8476503e0c773a409ef",
    measurementId: "G-XWL61XBNR5"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {auth , provider};
  export default db;