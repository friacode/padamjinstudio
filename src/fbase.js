import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3uGMPpcxt3b_uICiWzuHshQl6ydt-GF8",
  authDomain: "padamjinstudio-958ae.firebaseapp.com",
  projectId: "padamjinstudio-958ae",
  storageBucket: "padamjinstudio-958ae.appspot.com",
  messagingSenderId: "196526446183",
  appId: "1:196526446183:web:708a4ae8e95546464566c2",
  measurementId: "G-CD73S2BY35"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();