import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBcns3Lw2xlkPHKGTQiFg4s_woXnE-fQC0",
    authDomain: "copic-fire.firebaseapp.com",
    projectId: "copic-fire",
    storageBucket: "copic-fire.appspot.com",
    messagingSenderId: "62908836507",
    appId: "1:62908836507:web:3a5852f6823160a0ec743e",
    measurementId: "G-HQQLC3M212"
};

// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const projectstorage = firebase.storage();
const firestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export {projectstorage, firestore, timestamp};