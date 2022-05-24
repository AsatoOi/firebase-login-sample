// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUzp0N1RxPJ1OvoTzpmab-2eGA0Iq7ciI",
  authDomain: "fir-sample-29615.firebaseapp.com",
  projectId: "fir-sample-29615",
  storageBucket: "fir-sample-29615.appspot.com",
  messagingSenderId: "620306134639",
  appId: "1:620306134639:web:8b3c8f20d078d167363f9a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
