
import './App.css';
import AppRouter from './AppRouter';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMcX4GbwsPaTUxHVeSrnM--EN086C4ig4",
  authDomain: "price-spotter-13817.firebaseapp.com",
  projectId: "price-spotter-13817",
  storageBucket: "price-spotter-13817.appspot.com",
  messagingSenderId: "251162401541",
  appId: "1:251162401541:web:9978bd5fc09f521c18756c",
  measurementId: "G-BDSTFBYSDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebase.auth
const analytics = getAnalytics(app);

function App() {
  return (
   <AppRouter />
  )
}

export default App;


