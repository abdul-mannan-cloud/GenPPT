// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVu639jEpD8YJ9zq9ew8MMs0K8JWe6NXU",
    authDomain: "genppt-beeae.firebaseapp.com",
    projectId: "genppt-beeae",
    storageBucket: "genppt-beeae.appspot.com",
    messagingSenderId: "779015060825",
    appId: "1:779015060825:web:28eccb474657ad049fa048"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();