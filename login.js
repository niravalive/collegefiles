document.addEventListener('DOMContentLoaded', () => {
    // --- Green Hacker Background Effect ---
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = '01'; // Binary for hacker feel
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }).fill(1);

    // --- NEW: NIRAV Text Animation Variables ---
    const niravText = 'u r noob';
    let niravPositions = []; // To store positions and opacities of 'NIRAV' text instances

    // Function to initialize new 'NIRAV' text instance
    function spawnNiravText() {
        if (Math.random() < 0.02) { // Less frequent spawning for subtle effect
            niravPositions.push({
                x: Math.random() * (canvas.width - 200), // Random X position
                y: Math.random() * (canvas.height - 50), // Random Y position
                opacity: 0, // Start fully transparent
                fadeDirection: 1, // 1 for fading in, -1 for fading out
                fontSize: Math.random() * 40 + 30 // Random font size between 30 and 70
            });
        }
    }


    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00FF00'; // Green color for the matrix rain
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }

        // --- NEW: Draw and animate NIRAV text ---
        spawnNiravText(); // Attempt to spawn new text

        niravPositions = niravPositions.filter(text => {
            ctx.font = `${text.fontSize}px 'Share Tech Mono', monospace`;
            ctx.fillStyle = `rgba(0, 255, 0, ${text.opacity})`; // Green with varying opacity
            ctx.fillText(niravText, text.x, text.y);

            text.opacity += text.fadeDirection * 0.02; // Adjust speed of fade

            if (text.opacity >= 0.8) { // Once it reaches a certain brightness, start fading out
                text.fadeDirection = -1;
            }
            if (text.opacity <= 0) { // If fully faded out, remove it
                return false;
            }
            return true; // Keep if still visible
        });
    }

    setInterval(drawMatrix, 100); // Increased interval slightly for better blend

    // --- Login Logic ---
    const loginForm = document.getElementById('login-form');
    const passcode_input = document.getElementById('passcode');
    const loginContainer = document.getElementById('login-container');
    const warningMessage = document.getElementById('warning-message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const passcode = passcode_input.value;

        warningMessage.classList.remove('visible');
        warningMessage.classList.add('hidden'); // Ensure it's truly hidden
        loginContainer.classList.remove('shake');

        if (passcode === '6969') {
            console.log('Access Granted. Redirecting...');
            window.location.href = 'https://drive.google.com/drive/folders/1Uuazn8N078BbvzzzwiXWCltozrZmnHiB?dmr=1&ec=wgc-drive-globalnav-goto';
        }
        else if (passcode === '5115') {
            console.log('Exclusive Access. Redirecting...');
            window.location.href = 'https://drive.google.com/drive/folders/1A1B5d-T4Dzbqhqi6FwGcEsyBiJzwKHx5?dmr=1&ec=wgc-drive-globalnav-goto';
        }
        else {
            console.log('Access Denied.');
            warningMessage.classList.remove('hidden'); // Make it take space
            warningMessage.classList.add('visible');   // Make it visible
            loginContainer.classList.add('shake');

            passcode_input.value = '';

            setTimeout(() => {
                loginContainer.classList.remove('shake');
            }, 1500);
        }
        
    });
    // --- Exclusive Users Button Logic ---
const exclusiveBtn = document.getElementById('exclusive-users-btn');

exclusiveBtn.addEventListener('click', () => {
    // Ab yeh naye exclusive_login.html page par bhej dega
    window.location.href = 'exclusive_login.html';
});
});