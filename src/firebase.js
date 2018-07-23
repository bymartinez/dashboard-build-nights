import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyCXBmNbxF1hs8qsHwNn0ZMkdNmJx41LQq4",
  authDomain: "build-nights-dashboard.firebaseapp.com",
  databaseURL: "https://build-nights-dashboard.firebaseio.com",
  projectId: "build-nights-dashboard",
  storageBucket: "build-nights-dashboard.appspot.com",
  messagingSenderId: "160961775496"
};

firebase.initializeApp(config);

export default firebase;