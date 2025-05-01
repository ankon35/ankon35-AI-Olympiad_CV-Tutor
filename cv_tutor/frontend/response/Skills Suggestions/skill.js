// Function to go back to the previous page
function goBack() {
    window.location.href = '/ankon35-AI-Olympiad_CV-Tutor/cv_tutor/frontend/dashboard/hr_body.html';  // Update URL based on your actual structure
}

// Function to extract query parameters from the URL
function getQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        result: urlParams.get('result') // Extract the 'result' query parameter from the URL
    };
}

// Get the percentage from the URL
const params = getQueryParams();
let percentage = parseInt(params.result); // Get result from URL query parameters




// Function to display the Skill Suggestions in the main-skills section
function displaySkillSuggestions(skillSuggestions) {
    const skillSection = document.querySelector('.main-skills');
    skillSection.innerHTML = `<h2>Main Key Skills and Projects Missing from the CV</h2>`;

    // Check if the response contains skills suggestions or a valid markdown-like format
    if (skillSuggestions) {
        const formattedText = markdownToHTML(skillSuggestions); // Convert markdown text to HTML (if necessary)
        skillSection.innerHTML += formattedText;
    } else {
        skillSection.innerHTML += "<p>No skill suggestions available.</p>";
    }
}

// Convert markdown text into HTML (simple conversion for the common use cases)
function markdownToHTML(markdownText) {
    let htmlText = markdownText
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
        .replace(/\* (.*?)\n/g, '<li>$1</li>') // List items (for bulleted list)
        .replace(/\n/g, '<br>'); // Line breaks

    return htmlText;
}

// Function to get the skill suggestions from the URL or API response
function getSkillSuggestions() {
    const params = getQueryParams(); // Get the query parameters from the URL
    const result = params.result; // Extract 'result' from the URL query string

    // If there's no result, we need to handle that case gracefully.
    if (!result) {
        alert("No result found.");
        return;
    }

    // Directly call the displaySkillSuggestions function with the result
    displaySkillSuggestions(result);
}

// Call the function to get the skill suggestions when the page loads
getSkillSuggestions();