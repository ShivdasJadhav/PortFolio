import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDpdOAVGbEkwG1u0S6pMFZsrh2ZXGqlpOA",
  authDomain: "erpauthentication.firebaseapp.com",
  databaseURL: "https://erpauthentication-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "erpauthentication",
  storageBucket: "erpauthentication.appspot.com",
  messagingSenderId: "769745595096",
  appId: "1:769745595096:web:9b44fe09a068742fdb45ad"
};
const app=initializeApp(firebaseConfig)
 const auth = getAuth();
export {app,auth};