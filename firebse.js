import firebase from 'firebase';

const firebaseApp = firebse.initializeApp({
    apiKey: "AIzaSyDv8QbBSOutIzZrY33WWXphDM94zhZuH18",
    authDomain: "messenger-app-a6abc.firebaseapp.com",
    databaseURL: "https://messenger-app-a6abc.firebaseio.com",
    projectId: "messenger-app-a6abc",
    storageBucket: "messenger-app-a6abc.appspot.com",
    messagingSenderId: "524774240704",
    appId: "1:524774240704:web:c74f540a0314f94fdc9825",
    measurementId: "G-2LRVJZGNTQ"
});

const db = firebaseApp.firestore();

export default db;