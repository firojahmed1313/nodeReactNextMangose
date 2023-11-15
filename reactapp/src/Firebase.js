// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { doc, getFirestore } from "firebase/firestore";

// in signin component 
import { auth } from "./Firebase";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";

// signin end 

// add data

import {  db} from "./Firebase";

import { addDoc ,collection } from "firebase/firestore";

const data = collection(db , "collection_name");


await addDoc(data , useStatedata)// in function
//add data end 

// fatch data 

import {  db} from "./Firebase";
import { getAuth } from "firebase/auth";
import { onSnapshot ,collection } from "firebase/firestore";

const fatchdata = collection(db , "collection_name");

onSnapshot(fatchdata , (snapshot)=>{
    setusestate(snapshot.docs.map((doc)=>({
        ...doc.data(),id : doc.id
    })))
})   // in useeffect in fuction



// fatch data end 


// delete data 




// delete data end 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-Hc0R_XMntqxd5XxZu1Q5gzIHuWHfsyw",
  authDomain: "testingreact-9283c.firebaseapp.com",
  projectId: "testingreact-9283c",
  storageBucket: "testingreact-9283c.appspot.com",
  messagingSenderId: "770968920113",
  appId: "1:770968920113:web:486964371208cb121eb510"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 
