// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyA5Bg4wKCOCrZcyC4kLqyJQG3Q6oqSlOjQ',
    authDomain: 'task-app-shea.firebaseapp.com',
    projectId: 'task-app-shea',
    storageBucket: 'task-app-shea.appspot.com',
    messagingSenderId: '215990263281',
    appId: '1:215990263281:web:7cc4aea6ca7b8ff0a5f850',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
