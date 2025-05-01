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

// Function to display the generated questions dynamically
function displayQuestions(questions) {
    const questionSection = document.querySelector('#question-content');
    questionSection.innerHTML = '<h2>Generated Questions</h2>';  // Title for the questions section

    // Check if the response contains questions or a valid markdown-like format
    if (questions) {
        const formattedText = markdownToHTML(questions); // Convert markdown text to HTML (if necessary)
        questionSection.innerHTML += formattedText;  // Add the formatted text to the section
    } else {
        questionSection.innerHTML += "<p>No questions generated.</p>"; // If no questions are available
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

// Function to get the generated questions from the URL or API response
function getQuestions() {
    const params = getQueryParams(); // Get the query parameters from the URL
    const result = params.result; // Extract 'result' from the URL query string

    // If there's no result, we need to handle that case gracefully.
    if (!result) {
        alert("No result found.");
        return;
    }

    // Directly call the displayQuestions function with the result
    displayQuestions(result);
}

// Call the function to get the generated questions when the page loads
getQuestions();
