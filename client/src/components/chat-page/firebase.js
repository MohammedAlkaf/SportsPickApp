import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "mysportspicksapp.firebaseapp.com",
    projectId: "mysportspicksapp",
    storageBucket: "mysportspicksapp.appspot.com",
    messagingSenderId: "180171390057",
    appId: "1:180171390057:web:f6abf468ce9001722d36f8",
    measurementId: "${config.measurementId}"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }