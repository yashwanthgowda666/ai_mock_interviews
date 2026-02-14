import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

console.log("ENV CHECK:");
console.log("PROJECT_ID =", process.env.FIREBASE_PROJECT_ID);
console.log("CLIENT_EMAIL =", process.env.FIREBASE_CLIENT_EMAIL);
console.log("PRIVATE_KEY exists =", !!process.env.FIREBASE_PRIVATE_KEY);

function initFirebaseAdmin() {
  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      }),
    });
    console.log("🔥 Firebase Admin INITIALIZED");
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
}

export const { auth, db } = initFirebaseAdmin();
