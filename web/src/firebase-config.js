/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
    apiKey: "AIzaSyADR9B0wDsL3351-rtp3B_Hjt003xlnmsk",
    authDomain: "friendlychat-7f9cb.firebaseapp.com",
    projectId: "friendlychat-7f9cb",
    storageBucket: "friendlychat-7f9cb.appspot.com",
    messagingSenderId: "193567622196",
    appId: "1:193567622196:web:c49588f92e845f3c5c3661"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}