import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeNAQc0T-7pHKjcdOw-88g_WAM-L8sKh8",
  authDomain: "rishwanth-portfolio.firebaseapp.com",
  databaseURL: "https://rishwanth-portfolio-default-rtdb.firebaseio.com",
  projectId: "rishwanth-portfolio",
  storageBucket: "rishwanth-portfolio.appspot.com",
  messagingSenderId: "1048761680028",
  appId: "1:1048761680028:web:7aef966ed355c656aaed59",
  measurementId: "G-SQ8ZJJMEJF",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
