import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyC_2vr_yfPfaMQgsJ3BKi5xYZZK7b682t0",
  authDomain: "petamigos-856e8.firebaseapp.com",
  projectId: "petamigos-856e8",
  storageBucket: "petamigos-856e8.appspot.com",
  messagingSenderId: "859778968445",
  appId: "1:859778968445:web:90e1d701e5391a0ed1ba14"
};

// Iniciar o firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;