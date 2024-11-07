import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
require('dotenv').config();

const firebaseConfig = {
  apiKey: secrets.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: secrets.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: secrets.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: secrets.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: secrets.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: secrets.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: secrets.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
