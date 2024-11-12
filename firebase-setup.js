// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASBG0QokU7kg8YkJ1nFS1c1OxelzWbEOc",
  authDomain: "livsync-waitlist.firebaseapp.com",
  projectId: "livsync-waitlist",
  storageBucket: "livsync-waitlist.firebasestorage.app",
  messagingSenderId: "618445948112",
  appId: "1:618445948112:web:624085bf90e7a8150e4ad5",
  measurementId: "G-90VCKCQGE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to add a document to Firestore
async function addWaitlistEmail(email) {
  try {
    const docRef = await addDoc(collection(db, "waitlist"), { email: email });
    console.log("Waitlist entry added with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding waitlist entry: ", e);
  }
}

async function addContactFormEntry(formData) {
  try {
    const docRef = await addDoc(collection(db, "contacts"), formData);
    console.log("Contact form entry added with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding contact form entry: ", e);
  }
}

// Export functions to be used in other scripts
export { addWaitlistEmail, addContactFormEntry };
