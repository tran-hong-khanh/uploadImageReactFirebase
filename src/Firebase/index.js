import firebase from "firebase";
//import "./node_modules/firebase/storage";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBZ4xQXULFhh51CV7VPgNnuOEZy3jsVaQQ",
//   authDomain: "react-drawer-1.firebaseapp.com",
//   databaseURL: "https://react-drawer-1.firebaseio.com",
//   projectId: "react-drawer-1",
//   storageBucket: "react-drawer-1.appspot.com",
//   messagingSenderId: "177095687889",
//   appId: "1:177095687889:web:05c8c913de0ba493"
// };
var firebaseConfig = {
  apiKey: 'AIzaSyBaYFysbW0XAUCyCNDczh6O_OmPi4RJ1KA',
  authDomain: 'fir-rn-e60d4.firebaseapp.com',
  databaseURL: 'https://fir-rn-e60d4.firebaseio.com',
  projectId: 'fir-rn-e60d4',
  storageBucket: 'fir-rn-e60d4.appspot.com',
  messagingSenderId: '660101633272',
  appId: '1:660101633272:web:f13a1d58bda3c584',
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { firebase, storage as default };