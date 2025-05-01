


// Helper function to show the loading spinner
function showLoading() {
    document.getElementById("loading11").style.display = "block";
    document.getElementById("table12").style.display = "none";
}

// Helper function to hide the loading spinner
function hideLoading() {
    document.getElementById("loading11").style.display = "none";
}

// Handle form upload
document.getElementById("upload-form").addEventListener("submit", async function (e) {
    e.preventDefault();
    showLoading();

    const formData = new FormData();
    const resumes = document.getElementById("resume-upload").files;
    const jdText = document.getElementById("job-description").value;

    // Append the uploaded resumes to the form data
    for (let i = 0; i < resumes.length; i++) {
        formData.append("pdf_file", resumes[i]);
    }

    // Append the job description text
    formData.append("jd_text", jdText);

    try {
        // Send the request to the backend to upload the files
        const response = await fetch("http://127.0.0.1:8080/api/upload_files", {
            method: "POST",
            body: formData
        });

        // Parse the response JSON
        const result = await response.json();
        console.log(result);
        alert("Upload successful!");
    } catch (error) {
        console.error("Upload error:", error);
        alert("Upload failed.");
    } finally {
        hideLoading();
    }
});



// Handle 'Show Match' button
document.getElementById("analyze_existing").addEventListener("click", async () => {
    showLoading();

    try {
        const formData = new FormData();
        formData.append("action", "match");

        const response = await fetch("http://127.0.0.1:8080/api/process_resume", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to fetch results. Status: ' + response.status);
        }

        // Parse the response
        const result = await response.json();
        console.log(result);

        if (result && result.result) {
            // Redirect to response.html with the result as a query parameter
            window.location.href = `/ankon35-AI-Olympiad_CV-Tutor/cv_tutor/frontend/response/Show%20Match/showmatch.html?result=${encodeURIComponent(result.result)}`;
        } else {
            alert("No valid result returned.");
        }
    } catch (error) {
        console.error("Matching error:", error);
        alert("Failed to analyze resumes.");
    } finally {
        hideLoading();
    }
});



// Handle 'Skill Suggestions' button
document.getElementById("skills_suggestion").addEventListener("click", async () => {
    console.log("Skill Suggestion button clicked.");  // Check if this is logged
    showLoading();  // Show loading spinner

    try {
        const formData = new FormData();
        formData.append("action", "skills_suggestion");  // Action for skill suggestions

        const response = await fetch("http://127.0.0.1:8080/api/process_resume", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to fetch results. Status: ' + response.status);
        }

        const result = await response.json();
        console.log(result); // Check the API result in console

        // Make sure the response contains the required result
        if (result && result.result) {
            // Check if the URL is correct and log to confirm
            console.log("Redirecting with result:", result.result);

            // URL encoding the result properly
            const encodedResult = encodeURIComponent(result.result);

            // Ensure the URL is correct and log the full URL
            const redirectUrl = `/ankon35-AI-Olympiad_CV-Tutor/cv_tutor/frontend/response/Skills%20Suggestions/skill.html?result=${encodedResult}`;
            console.log("Redirection URL:", redirectUrl);

            // Now perform the redirection
            window.location.href = redirectUrl;

        } else {
            alert("No valid result returned.");
        }
    } catch (error) {
        console.error("Skill suggestion error:", error);
        alert("Failed to generate skill suggestions.");
    } finally {
        hideLoading();  // Hide loading spinner
    }
});




// Handle 'Project Suggestion' button click
document.getElementById("project_suggestion").addEventListener("click", async () => {
    console.log("Project Suggestion button clicked.");  // Check if this is logged
    showLoading();  // Show loading spinner

    try {
        const formData = new FormData();
        formData.append("action", "project_suggestion");  // Action for project suggestions

        const response = await fetch("http://127.0.0.1:8080/api/process_resume", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to fetch results. Status: ' + response.status);
        }

        const result = await response.json();
        console.log(result); // Check the API result in console

        // Make sure the response contains the required result
        if (result && result.result) {
            // Check if the URL is correct and log to confirm
            console.log("Redirecting with result:", result.result);

            // URL encoding the result properly
            const encodedResult = encodeURIComponent(result.result);

            // Ensure the URL is correct and log the full URL
            const redirectUrl = `/ankon35-AI-Olympiad_CV-Tutor/cv_tutor/frontend/response/Project%20Suggestion/Psuggestion.html?result=${encodedResult}`;
            console.log("Redirection URL:", redirectUrl);

            // Now perform the redirection
            window.location.href = redirectUrl;

        } else {
            alert("No valid result returned.");
        }
    } catch (error) {
        console.error("Project suggestion error:", error);
        alert("Failed to generate project suggestions.");
    } finally {
        hideLoading();  // Hide loading spinner
    }
});






// Handle 'Draft Cover Letter' button click
document.getElementById("draft_cover_letter").addEventListener("click", async () => {
    console.log("Draft Cover Letter button clicked.");  // Check if this is logged
    showLoading();  // Show loading spinner

    try {
        const formData = new FormData();
        formData.append("action", "draft_cover_letter");  // Action for draft cover letter

        const response = await fetch("http://127.0.0.1:8080/api/process_resume", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to fetch results. Status: ' + response.status);
        }

        const result = await response.json();
        console.log(result); // Check the API result in console

        // Make sure the response contains the required result (cover letter text)
        if (result && result.result) {
            // Check if the URL is correct and log to confirm
            console.log("Redirecting with result:", result.result);

            // URL encode the result properly
            const encodedResult = encodeURIComponent(result.result);

            // Ensure the URL is correct and log the full URL
            const redirectUrl = `/ankon35-AI-Olympiad_CV-Tutor/cv_tutor/frontend/response/Cover%20Letter/coverLetter.html?result=${encodedResult}`;
            console.log("Redirection URL:", redirectUrl);

            // Now perform the redirection
            window.location.href = redirectUrl;

        } else {
            alert("No valid result returned.");
        }
    } catch (error) {
        console.error("Cover letter generation error:", error);
        alert("Failed to generate cover letter.");
    } finally {
        hideLoading();  // Hide loading spinner
    }
});



// Handle 'Draft Email' button click
document.getElementById("draft_email").addEventListener("click", async () => {
    console.log("Draft Email button clicked.");  // Check if this is logged
    showLoading();  // Show loading spinner

    try {
        const formData = new FormData();
        formData.append("action", "draft_email");  // Action for draft email

        const response = await fetch("http://127.0.0.1:8080/api/process_resume", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to fetch results. Status: ' + response.status);
        }

        const result = await response.json();
        console.log(result); // Check the API result in console

        // Make sure the response contains the required result (draft email content)
        if (result && result.result) {
            // Check if the URL is correct and log to confirm
            console.log("Redirecting with result:", result.result);

            // URL encode the result properly
            const encodedResult = encodeURIComponent(result.result);

            // Ensure the URL is correct and log the full URL
            const redirectUrl = `/ankon35-AI-Olympiad_CV-Tutor/cv_tutor/frontend/response/draftEmail/draftEmail.html?result=${encodedResult}`;
            console.log("Redirection URL:", redirectUrl);

            // Now perform the redirection
            window.location.href = redirectUrl;

        } else {
            alert("No valid result returned.");
        }
    } catch (error) {
        console.error("Draft email generation error:", error);
        alert("Failed to generate draft email.");
    } finally {
        hideLoading();  // Hide loading spinner
    }
});





// Handle 'Question Generation' button click
document.getElementById("question_generation").addEventListener("click", async () => {
    console.log("Question Generation button clicked.");  // Check if this is logged
    showLoading();  // Show loading spinner

    try {
        const formData = new FormData();
        formData.append("action", "question_generation");  // Action for question generation

        const response = await fetch("http://127.0.0.1:8080/api/process_resume", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to fetch results. Status: ' + response.status);
        }

        const result = await response.json();
        console.log(result); // Check the API result in console

        // Make sure the response contains the required result (generated questions)
        if (result && result.result) {
            // Check if the URL is correct and log to confirm
            console.log("Redirecting with result:", result.result);

            // URL encode the result properly
            const encodedResult = encodeURIComponent(result.result);

            // Ensure the URL is correct and log the full URL
            const redirectUrl = `/ankon35-AI-Olympiad_CV-Tutor/cv_tutor/frontend/response/Question%20Generator/questionGen.html?result=${encodedResult}`;
            console.log("Redirection URL:", redirectUrl);

            // Now perform the redirection
            window.location.href = redirectUrl;

        } else {
            alert("No valid result returned.");
        }
    } catch (error) {
        console.error("Question generation error:", error);
        alert("Failed to generate questions.");
    } finally {
        hideLoading();  // Hide loading spinner
    }
});





// Action button handler
async function sendAction(action) {
    showLoading();

    try {
        const formData = new FormData();
        formData.append("action", action); // Ensure that the action matches one of the valid options

        const response = await fetch("http://127.0.0.1:8080/api/process_resume", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to fetch results. Status: ' + response.status);
        }

        const result = await response.json();
        console.log(result);
        alert(`${action.replace("_", " ")} completed!`);
    } catch (error) {
        console.error("Action error:", error);
        alert("Something went wrong.");
    } finally {
        hideLoading();
    }
}

// Extract button
document.getElementById("extract_trig").addEventListener("click", async () => {
    await sendAction("extract_info");
});

// Display the matching results in the table
function displayResults(data) {
    const tableBody = document.getElementById("cv-matching-table-body");
    tableBody.innerHTML = "";

    if (!data || !Array.isArray(data) || data.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="3">No results available</td></tr>`;
    } else {
        data.forEach(entry => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${entry.name || "N/A"}</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${entry.match || "N/A"}%</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><button onclick="alert('View ${entry.name}')">View</button></td>
            `;

            tableBody.appendChild(row);
        });
    }

    document.getElementById("table12").style.display = "block";
}

// // Handle the action buttons (e.g., Skill Suggestions, Project Suggestions, etc.)
// // document.getElementById("skills_suggestion").addEventListener("click", () => sendAction("skills_suggestion"));
// // document.getElementById("project_suggestion").addEventListener("click", () => sendAction("project_suggestion"));
// // document.getElementById("draft_cover_letter").addEventListener("click", () => sendAction("draft_cover_letter"));
// // document.getElementById("draft_email").addEventListener("click", () => sendAction("draft_email"));
// // document.getElementById("question_generation").addEventListener("click", () => sendAction("question_generation"));









