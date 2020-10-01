import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBDDC25jf3CMWzSKoAIw54lwkKn1xkckN4",
    authDomain: "unbox-data.firebaseapp.com",
    databaseURL: "https://unbox-data.firebaseio.com",
    projectId: "unbox-data",
    storageBucket: "unbox-data.appspot.com",
    messagingSenderId: "631500163012",
    appId: "1:631500163012:web:3c0592847181bfeea64691"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase;







