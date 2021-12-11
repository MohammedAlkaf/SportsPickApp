import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDQw01LUpGFxPoDMy2yCsE9MFOK8dQ7ECY",
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