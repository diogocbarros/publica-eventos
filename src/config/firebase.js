import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBKqZyivXRztd8MO390TRx1eyUY6a2hS-A',
  authDomain: 'eventos-96921.firebaseapp.com',
  databaseURL: 'https://eventos-96921.firebaseio.com',
  projectId: 'eventos-96921',
  storageBucket: 'eventos-96921.appspot.com',
  messagingSenderId: '501490775928',
  appId: '1:501490775928:web:1f7ce29cd46129ff0bba8d',
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
