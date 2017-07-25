import * as firebase from 'firebase';
import 'firebase/auth';

//Still need to initialize firebase.  TODO: check docs.
const config = {
    apiKey: "AIzaSyCVaOF2yca8gQQBH214C4NfPMmg6rrN940",
    authDomain: "boomtown-27f3a.firebaseapp.com",
    databaseURL: "https://boomtown-27f3a.firebaseio.com",
    projectId: "boomtown-27f3a",
    storageBucket: "boomtown-27f3a.appspot.com",
    messagingSenderId: "1089169426347"
};

const FirebaseApp = firebase.initializeApp(config);
const FirebaseAuth = FirebaseApp.auth();
const FirebaseDB = firebase.database();
// const FirebaseStorage = firebase.storage(FirebaseApp);

export {
    FirebaseApp,
    FirebaseAuth,
    FirebaseDB,
    // FirebaseStorage, TODO: check back on dis.
};
