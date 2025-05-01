// Function for the button click event (just for future functionality)
function startApp() {
    setTimeout(function() {
        window.location.href = '/cv_tutor/frontend/dashboard/hr_body.html';
    }, 500); // Delay of 500ms (0.5 seconds) before navigating
}


// Typewriter effect on the header text
const typedText = "Welcome to the CV Tutor";
let index = 0;

function typeWriterEffect() {
    document.getElementById("typed-text").innerHTML = ''; // Clear text before starting
    let i = 0;
    function typing() {
        if (i < typedText.length) {
            document.getElementById("typed-text").innerHTML += typedText.charAt(i);
            i++;
            setTimeout(typing, 100); // Adjust typing speed here (in ms)
        }
    }
    typing();
}

// Call the typewriter effect when the page loads
window.onload = function() {
    typeWriterEffect();
};
