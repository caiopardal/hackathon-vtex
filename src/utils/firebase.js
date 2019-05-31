import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA4rj24n7jbNRwoS1tEmq1zna67KFFVNRo",
  authDomain: "gopec-92fb0.firebaseapp.com",
  databaseURL: "https://gopec-92fb0.firebaseio.com",
  projectId: "gopec-92fb0",
  storageBucket: "gopec-92fb0.appspot.com",
  messagingSenderId: "881721589652",
  appId: "1:881721589652:web:18e2483f46be9a6e"
};

let firebase = Firebase.initializeApp(firebaseConfig);

export default firebase;
