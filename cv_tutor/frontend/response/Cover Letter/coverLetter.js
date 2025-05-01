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

// Function to display the Cover Letter dynamically
function displayCoverLetter(coverLetter) {
    const coverLetterSection = document.querySelector('.cover-letter');  // Ensure correct selector

    if (!coverLetterSection) {
        console.error("Cover Letter section not found.");
        return;
    }

    const coverLetterContent = document.getElementById('cover-letter-content');
    if (!coverLetterContent) {
        console.error("Cover Letter content element not found.");
        return;
    }

    coverLetterContent.innerHTML = '<h2>Cover Letter</h2>';  // Title for Cover Letter section

    console.log("Displaying cover letter: ", coverLetter); // Debugging log

    // Check if the cover letter exists and is not empty
    if (coverLetter) {
        const formattedText = markdownToHTML(coverLetter); // Convert markdown text to HTML (if necessary)
        coverLetterContent.innerHTML += formattedText;  // Add the formatted text to the section
    } else {
        coverLetterContent.innerHTML += "<p>No cover letter available.</p>"; // If no cover letter available
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

// Function to decode a URI safely
function decodeURIWithFallback(uri) {
    try {
        return decodeURIComponent(uri);
    } catch (error) {
        console.error("Error decoding URI:", error);
        return uri; // Return the original URI if decoding fails
    }
}

// Function to get the cover letter from the URL or API response
function getCoverLetter() {
    const params = getQueryParams();
    const result = params.result; // Extract 'result' from the URL query string

    // If there's no result, we need to handle that case gracefully.
    if (!result) {
        alert("No result found.");
        return;
    }

    // Try decoding the result
    const decodedResult = decodeURIWithFallback(result); // Use the custom decode function

    console.log("Decoded cover letter result: ", decodedResult); // Log the raw result to check its content

    // Directly call the displayCoverLetter function with the decoded result
    displayCoverLetter(decodedResult);
}

// Call the function to get the cover letter when the page loads
document.addEventListener('DOMContentLoaded', getCoverLetter);  // Wait until the DOM is fully loaded before calling getCoverLetter
