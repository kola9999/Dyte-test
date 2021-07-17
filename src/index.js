import firebase from "firebase/app";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "../src/components/index.css";

//firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBdVy7Tn4HniT6NMzvARzp6qRbF3mHmhRM",
  authDomain: "potent-symbol-233716.firebaseapp.com",
  databaseURL: "https://potent-symbol-233716.firebaseio.com",
  projectId: "potent-symbol-233716",
  storageBucket: "potent-symbol-233716.appspot.com",
  messagingSenderId: "1075928338495",
  appId: "1:1075928338495:web:b0ca7383d74ae5e030a88a"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
