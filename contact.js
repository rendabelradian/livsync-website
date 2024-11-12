// Import the function to save data to Firestore
import { addContactFormEntry } from "./firebase-setup.js";

// Listen for form submission
document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Gather data from form fields
    const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("emailAddress").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        message: document.getElementById("message").value,
        timestamp: new Date() // Add a timestamp
    };

    // Attempt to add data to Firestore
    try {
        await addContactFormEntry(formData);
        alert("Thank you for your message. We will be in touch soon!");
        document.getElementById("contactForm").reset(); // Reset form after submission
    } catch (error) {
        console.error("Error submitting contact form: ", error);
        alert("There was an error. Please try again.");
    }
});
