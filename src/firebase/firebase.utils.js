import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCOz2JAJvkTTBBkIeecKdcK5sdhLpgmwJI",
    authDomain: "crwn-db-fa5bf.firebaseapp.com",
    databaseURL: "https://crwn-db-fa5bf.firebaseio.com",
    projectId: "crwn-db-fa5bf",
    storageBucket: "crwn-db-fa5bf.appspot.com",
    messagingSenderId: "265174705680",
    appId: "1:265174705680:web:162416d3848d11d45c0c95",
    measurementId: "G-BE5Y4XEXMW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;