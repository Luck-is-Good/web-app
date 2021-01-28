/* eslint-disable */

import firebase from 'firebase'

var config = {
    
    apiKey: "AIzaSyBREFVmIknnmHUNeXX_HWpwny3FgKkiQiY",
    authDomain: "webos-proj---a-dit-no.firebaseapp.com",
    databaseURL: "https://webos-proj---a-dit-no-default-rtdb.firebaseio.com",
    projectId: "webos-proj---a-dit-no",
    storageBucket: "webos-proj---a-dit-no.appspot.com",
    messagingSenderId: "169263273461",
    appId: "1:169263273461:web:d0c43bc52000121ab1fcbc",
    measurementId: "G-K5NS7WWVQZ"
    
}

firebase.initializeApp(config);

export const firestore = firebase.firestore();
