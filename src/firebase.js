import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    // your firebase config object

    apiKey: "AIzaSyA9AUwlWCAeUthoLrknuqeIEYeWgFBk6Ek",
    authDomain: "walld-4a474.firebaseapp.com",
    databaseURL: "https://walld-4a474-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "walld-4a474",
    storageBucket: "walld-4a474.appspot.com",
    messagingSenderId: "299810831216",
    appId: "1:299810831216:web:6097ceef8e580178d9adb5",
    measurementId: "G-XZR2763K3T"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();