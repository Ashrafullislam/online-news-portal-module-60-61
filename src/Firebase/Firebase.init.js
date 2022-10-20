// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIe2JOKiMzvdvL7FoWPriMAsgrKdeFG8o",
  authDomain: "news-portal-apps.firebaseapp.com",
  projectId: "news-portal-apps",
  storageBucket: "news-portal-apps.appspot.com",
  messagingSenderId: "630521841508",
  appId: "1:630521841508:web:c86f6e9fe55927eb779c71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;