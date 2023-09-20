// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
 } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDsi8oqbov2kShyu-hYt7pD_YJcWk-Vr0",
  authDomain: "crwn-clothing-db-6bf6d.firebaseapp.com",
  projectId: "crwn-clothing-db-6bf6d",
  storageBucket: "crwn-clothing-db-6bf6d.appspot.com",
  messagingSenderId: "908244156199",
  appId: "1:908244156199:web:654e281d0c9af8e1ffb302"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
