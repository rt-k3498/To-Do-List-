import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBAELBkHRF5xt6OhKTjd4SBWCq1L1IozB8",
    authDomain: "calculator-app-9b10e.firebaseapp.com",
    projectId: "calculator-app-9b10e",
    storageBucket: "calculator-app-9b10e.firebasestorage.app",
    messagingSenderId: "293883587993",
    appId: "1:293883587993:web:a0d552dae753ea7bb17708"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

