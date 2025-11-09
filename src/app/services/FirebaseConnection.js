import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYXN0mhPY4V3Crm_I5z1nPP0LOYtzqc6s",
    authDomain: "mpesa-summary-app.firebaseapp.com",
    projectId: "mpesa-summary-app",
    storageBucket: "mpesa-summary-app.firebasestorage.app",
    messagingSenderId: "477858064897",
    appId: "1:477858064897:web:dc26721d3c563022c62e00",
    measurementId: "G-R001RCECWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "app_links"));

const latestValue = querySnapshot.docs[querySnapshot.docs.length -1];

export const latestVersion = latestValue.id;

export const arm64Url = latestValue.data()['arm64_url'];
export const defaultUrl = latestValue.data()['default_url'];
