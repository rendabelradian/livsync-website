// script.js

// Event listener for the email form submission
document.querySelector('.email-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting
    alert("Thank you! We'll reach out when the beta is ready.");
});

// Event listener for the "About" button
document.getElementById("about-button").addEventListener("click", function() {
    const mainContent = document.getElementById("main-content");
    const aboutSection = document.getElementById("about-section");
    
    // Check if both main content and about section exist
    if (mainContent && aboutSection) {
        mainContent.style.display = "none";  // Hide the main content
        aboutSection.style.display = "block"; // Show the about section
    } else {
        console.error("Main content or about section is missing.");
    }
});

// Event listener for the "Back" button
document.getElementById("back-button").addEventListener("click", function() {
    const mainContent = document.getElementById("main-content");
    const aboutSection = document.getElementById("about-section");

    // Check if both main content and about section exist
    if (mainContent && aboutSection) {
        mainContent.style.display = "block";  // Show the main content
        aboutSection.style.display = "none"; // Hide the about section
    } else {
        console.error("Main content or about section is missing.");
    }
});
