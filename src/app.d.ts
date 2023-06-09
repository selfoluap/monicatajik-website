// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaCezomJuNXIp560QTd_cLAVn_3bwrBkQ",
  authDomain: "monica-personal-website.firebaseapp.com",
  projectId: "monica-personal-website",
  storageBucket: "monica-personal-website.appspot.com",
  messagingSenderId: "782868417899",
  appId: "1:782868417899:web:0ffdafa8abe6f43361902e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
