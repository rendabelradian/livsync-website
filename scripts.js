import { addWaitlistEmail, addContactFormEntry } from "./firebase-setup.js";

// Handle waitlist form submission
document.getElementById("waitlistForm").addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent default form submission

  const email = document.getElementById("userEmail").value;

  try {
    await addWaitlistEmail(email);
    alert("Thank you for joining the waitlist!");
    document.getElementById("waitlistForm").reset(); // Clear form after submission
  } catch (error) {
    console.error("Error submitting waitlist form: ", error);
    alert("There was an error. Please try again.");
  }
});

// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent default form submission

  const formData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("emailAddress").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    message: document.getElementById("message").value,
    timestamp: new Date() // Optional: add timestamp to the data
  };

  try {
    await addContactFormEntry(formData);
    alert("Thank you for your message. We will be in touch soon!");
    document.getElementById("contactForm").reset(); // Clear form after submission
  } catch (error) {
    console.error("Error submitting contact form: ", error);
    alert("There was an error. Please try again.");
  }
});
