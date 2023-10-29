import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4fAjtb_vsaZqXFjSiQsFge54pRYN0GGs",
  authDomain: "ayaya-387320.firebaseapp.com",
  projectId: "ayaya-387320",
  storageBucket: "ayaya-387320.appspot.com",
  messagingSenderId: "489676328650",
  appId: "1:489676328650:web:028c867ea24744682fee33",
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);
