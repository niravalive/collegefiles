// firebase-init.js se 'auth' object ko import kar rahe hain
import { auth } from './firebase-init.js'; 
// Firebase se login function ko import kar rahe hain
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const exclusiveLoginForm = document.getElementById('exclusive-login-form');
const userIdInput = document.getElementById('userid');
const userPassInput = document.getElementById('userpass');

exclusiveLoginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Form ko refresh hone se roko

    // User se 'username' le rahe hain aur uske peeche apna dummy domain laga rahe hain
    const email = userIdInput.value + '@exclusive.user';
    const password = userPassInput.value;

    console.log('Attempting to log in with:', email);

    // Firebase ka login function use kar rahe hain
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Login successful!
            const user = userCredential.user;
            console.log('Login Successful!', user);
            alert('Login successful! Welcome.');
            // Agle step me hum isse dashboard page par bhejenge
            // window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            // Login fail ho gaya
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Login Failed:', errorCode, errorMessage);
            
            // User-friendly error messages
            if (errorCode === 'auth/wrong-password') {
                alert('Login Failed: Incorrect password. Please try again.');
            } else if (errorCode === 'auth/user-not-found') {
                alert('Login Failed: This user does not exist.');
            } else {
                alert('Login Failed: ' + errorMessage);
            }
        });
});