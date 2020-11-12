import firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBHZSQa4Bu2443kLZTx6x1hIRGdBq0f5GM",
  authDomain: "five-a-day-8e1f7.firebaseapp.com",
  databaseURL: "https://five-a-day-8e1f7.firebaseio.com",
  projectId: "five-a-day-8e1f7",
  storageBucket: "five-a-day-8e1f7.appspot.com",
  messagingSenderId: "814095794674",
  appId: "1:814095794674:web:24cb0f3dbb460bae6c6b6b",
  measurementId: "G-P7M8Z68HPX",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
