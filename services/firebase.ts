
import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";

// LƯU Ý: Thay thế bằng cấu hình Firebase thật của bạn từ Firebase Console
// (Project Settings -> General -> Your apps -> SDK setup and configuration)
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

// Khởi tạo Cloud Functions (region nên trùng với region deploy function, ví dụ: 'asia-southeast1' cho Singapore)
export const functions = getFunctions(app); 
