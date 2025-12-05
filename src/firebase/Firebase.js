import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAA2105ptm_GOl6wxa_jS_Uvh9luFTrhDI",
  authDomain: "online-course-platform-e9122.firebaseapp.com",
  projectId: "online-course-platform-e9122",
  storageBucket: "online-course-platform-e9122.firebasestorage.app",
  messagingSenderId: "712541550436",
  appId: "1:712541550436:web:4e72e013a82e22406e6c71"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();