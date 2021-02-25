import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBYjlSMQA-896uh7ZwvKZqwqLDpU8eTTOA",
  authDomain: "catalog-project-5624b.firebaseapp.com",
  databaseURL: "https://catalog-project-5624b-default-rtdb.firebaseio.com",
  projectId: "catalog-project-5624b",
  storageBucket: "catalog-project-5624b.appspot.com",
  messagingSenderId: "333581043593",
  appId: "1:333581043593:web:2c4d716d06e2b8d5fcc358"
}
firebase.initializeApp(firebaseConfig) 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
