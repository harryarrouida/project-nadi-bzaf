import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth } from "firebase/auth";

// importation dyal function bach nsetapiw db
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // data hna alfatayat
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = initializeAuth(app);

// setup dyal db
export const db = getFirestore(app);

