import firebaseSdk from 'firebase';
import 'firebase/storage';

  const firebaseConfig = {
    apiKey: "AIzaSyDmV7f2ZpBTIzFZV0Gt_wSht-HX9kSi6Gw",
    authDomain: "context-api-65e36.firebaseapp.com",
    projectId: "context-api-65e36",
    storageBucket: "context-api-65e36.appspot.com",
    messagingSenderId: "178143216187",
    appId: "1:178143216187:web:3068d1e6094ddf25f3521e"
  };
  // Initialize Firebase
export const firebase = firebaseSdk;
export const firebaseApp=  firebaseSdk.initializeApp(firebaseConfig);
export const db= firebaseApp.firestore();
export const storage = firebaseSdk.storage();
export const auth= firebaseSdk.auth();
