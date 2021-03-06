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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot);

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;