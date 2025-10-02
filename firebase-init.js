// Firebase App aur Auth functions ko import kar rahe hain
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Yeh tera config code hai (isko change mat karna)
const firebaseConfig = {
  apiKey: "AIzaSyCnl9jLaLglhxH70kPQaHIc_UCX7Z02h2M",
  authDomain: "collage-docs.firebaseapp.com",
  projectId: "collage-docs",
  storageBucket: "collage-docs.firebasestorage.app",
  messagingSenderId: "984692943531",
  appId: "1:984692943531:web:fa0b3f1e5ea301088ca5ee",
  measurementId: "G-B0V4KYN0WF"
};

// Firebase ko initialize karo
const app = initializeApp(firebaseConfig);

// YEH LINE MISSING THI: Authentication service ko initialize karo
const auth = getAuth(app);

// YEH LINE BHI MISSING THI: 'auth' ko doosri files me use karne ke liye export karo
export { auth };