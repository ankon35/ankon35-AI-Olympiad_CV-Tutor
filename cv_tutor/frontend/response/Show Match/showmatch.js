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

// Get the percentage from the URL
const params = getQueryParams();
let percentage = parseInt(params.result); // Get result from URL query parameters

// Ensure that percentage is valid
if (isNaN(percentage)) {
    percentage = 0; // Default to 0 if the percentage is not available
}

// Get the percentage element and update it
const percentageElement = document.getElementById('percentage');
percentageElement.innerText = `${percentage}%`;

// Change the color of the percentage text based on the value
if (percentage > 80) {
    percentageElement.classList.add('green');
} else {
    percentageElement.classList.add('red');
}

// Create the donut chart dynamically
const ctx = document.getElementById('donutChart').getContext('2d');
const donutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Matched', 'Remaining'],
        datasets: [{
            data: [percentage, 100 - percentage],  // Dynamic data based on the percentage
            backgroundColor: [percentage > 80 ? '#4CAF50' : '#FF5733', '#f1f1f1'], // Green for match, red for below 80%
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        cutoutPercentage: 80,  // Makes it a donut chart
        plugins: {
            tooltip: {
                enabled: false  // Disable tooltips to keep the chart clean
            },
            legend: {
                display: false // Hide the legend
            }
        }
    }
});