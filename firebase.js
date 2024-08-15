// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwF4C693KdkR9Kugw5LkdCCNsjneSHpBI",
  authDomain: "dribbble-d9646.firebaseapp.com",
  projectId: "dribbble-d9646",
  storageBucket: "dribbble-d9646.appspot.com",
  messagingSenderId: "943630920000",
  appId: "1:943630920000:web:1280e88bc278558d4372a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}