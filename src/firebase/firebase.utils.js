import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDg5OCNR8roCr4o_qoey16Dz0VAj6WZcOk',
  authDomain: 'crown-db-8d0df.firebaseapp.com',
  databaseURL: 'https://crown-db-8d0df.firebaseio.com',
  projectId: 'crown-db-8d0df',
  storageBucket: 'crown-db-8d0df.appspot.com',
  messagingSenderId: '996596863230',
  appId: '1:996596863230:web:8ba91d7d1ab1ae0be895af',
  measurementId: 'G-2FSCEHDC09',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
