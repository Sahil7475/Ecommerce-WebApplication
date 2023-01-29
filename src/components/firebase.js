// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCbRHLW9S5hUN0IE0gHG4vNuuBqwCc1byQ",
    authDomain: "clone-44c9a.firebaseapp.com",
    projectId: "clone-44c9a",
    storageBucket: "clone-44c9a.appspot.com",
    messagingSenderId: "1078042601380",
    appId: "1:1078042601380:web:ae9d54cec53d896c490331",
    measurementId: "G-C3M30MBTT0"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
