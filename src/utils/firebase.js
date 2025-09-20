// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrl_TnrlPSq6U-jUdo2QL1pzZZMOoT9oQ",
  authDomain: "stream-ai-3f264.firebaseapp.com",
  projectId: "stream-ai-3f264",
  storageBucket: "stream-ai-3f264.appspot.com", // <-- fixed
  messagingSenderId: "902987228449",
  appId: "1:902987228449:web:6926843b2d47501c824a60",
  measurementId: "G-XKG8XWL74F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Firebase services
export const auth = getAuth(app); // Authentication
// export const db = getFirestore(app); // Firestore database
// export const storage = getStorage(app); // Storage (images, files, etc.)
