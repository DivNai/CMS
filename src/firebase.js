// Import Firebase core
import { initializeApp } from "firebase/app";

// Import Firestore
import { getFirestore } from "firebase/firestore";

// (Optional) Analytics – you can REMOVE this if you want
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVHNSW7iIfGO_j5kC_HRXCpDNARL5p478",
  authDomain: "complaint-system-ef4ef.firebaseapp.com",
  projectId: "complaint-system-ef4ef",
  storageBucket: "complaint-system-ef4ef.firebasestorage.app",
  messagingSenderId: "162891964834",
  appId: "1:162891964834:web:6bfec802784202a7f992fb",
  measurementId: "G-MD9NMYZWZT",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore and EXPORT it
export const db = getFirestore(app);

// Optional: Analytics (safe to keep)
export const analytics = getAnalytics(app);
