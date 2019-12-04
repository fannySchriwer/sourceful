import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: process.env.GATSBY_FIRESTORE_APIKEY,
  authDomain: process.env.GATSBY_FIRESTORE_AUTHDOMAIN,
  databaseURL: process.env.GATSBY_FIRESTORE_DATABASEURL,
  projectId: process.env.GATSBY_FIRESTORE_PROJECTID,
  storageBucket: process.env.GATSBY_FIRESTORE_STORAGEBUCKET,
  appId: process.env.GATSBY_FIRESTORE_APPID,
  messagingSenderId: process.env.GATSBY_FIRESTORE_MESSAGINGSENDERID,
  measurementId: process.env.GATSBY_FIRESTORE_MEASUREMENTID,
};

firebase.initializeApp(config);

export default firebase;
