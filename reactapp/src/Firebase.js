// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { doc, getFirestore } from "firebase/firestore";

// in signin component 
import { auth } from "./Firebase";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";

// signin end 
// sign in login data from fire base 

import { getAuth } from "firebase/auth";
 const authDetails = getAuth();

  authDetails?.currentUser.displayName;
  authDetails?.currentUser.email;
  authDetails?.currentUser.phoneNumber;
  authDetails?.currentUser.photoURL;

  authDetails.signOut(); // in function

// end credential details
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

// fatch data using id 
import { getDoc,doc ,collection } from "firebase/firestore";

const fatchdatauseing_id = collection(db , "collection_name");
    
    const iddata = doc(db , "collection_name", id);
  //in useeffect in fuction
 getDoc(iddata).then((doc)=> setuseeffect_id_data(doc.data()));

// fatch data end 


// delete data 
import { doc ,deleteDoc } from "firebase/firestore";
const deletedata = doc(db , "collection_name", id);  // in function 
await deleteDoc(deletedata);
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
