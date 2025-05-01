// Function to go back to the previous page
function goBack() {
    window.location.href = '/cv_tutor/frontend/dashboard/hr_body.html';  // Update URL based on your actual structure
}

// Function to extract query parameters from the URL
function getQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        result: urlParams.get('result') // Extract the 'result' query parameter from the URL
    };
}

// Function to display the Project Suggestions dynamically
function displayProjectSuggestions(projectSuggestions) {
    const projectSection = document.querySelector('.project-suggestions');
    projectSection.innerHTML = `<h2>Project Suggestions</h2>`;  // Title for Project Suggestions section

    // Check if the response contains project suggestions or a valid markdown-like format
    if (projectSuggestions) {
        const formattedText = markdownToHTML(projectSuggestions); // Convert markdown text to HTML (if necessary)
        projectSection.innerHTML += formattedText;  // Add the formatted text to the section
    } else {
        projectSection.innerHTML += "<p>No project suggestions available.</p>"; // If no project suggestions
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

// Function to get the project suggestions from the URL or API response
function getProjectSuggestions() {
    const params = getQueryParams(); // Get the query parameters from the URL
    const result = params.result; // Extract 'result' from the URL query string

    // If there's no result, we need to handle that case gracefully.
    if (!result) {
        alert("No result found.");
        return;
    }

    // Directly call the displayProjectSuggestions function with the result
    displayProjectSuggestions(result);
}

// Call the function to get the project suggestions when the page loads
getProjectSuggestions();
