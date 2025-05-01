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

// Function to display the Draft Email dynamically
function displayDraftEmail(draftEmail) {
    const draftEmailSection = document.querySelector('.draft-email');
    draftEmailSection.innerHTML = '<h2>Draft Email</h2>';  // Title for Draft Email section

    console.log("Displaying draft email: ", draftEmail); // Debugging log

    // Check if the draft email exists and is not empty
    if (draftEmail) {
        const formattedText = markdownToHTML(draftEmail); // Convert markdown text to HTML (if necessary)
        draftEmailSection.innerHTML += formattedText;  // Add the formatted text to the section
    } else {
        draftEmailSection.innerHTML += "<p>No draft email available.</p>"; // If no draft email available
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

// Function to get the draft email from the URL or API response
function getDraftEmail() {
    const params = getQueryParams();
    const result = params.result; // Extract 'result' from the URL query string

    // If there's no result, we need to handle that case gracefully.
    if (!result) {
        alert("No result found.");
        return;
    }

    // Try decoding the result
    const decodedResult = decodeURIWithFallback(result); // Use the custom decode function

    console.log("Decoded draft email result: ", decodedResult); // Log the raw result to check its content

    // Directly call the displayDraftEmail function with the decoded result
    displayDraftEmail(decodedResult);
}

// Call the function to get the draft email when the page loads
document.addEventListener('DOMContentLoaded', getDraftEmail);  // Wait until the DOM is fully loaded before calling getDraftEmail
