// firebase.js - initialize Firebase (modular SDK v10)
// Exports app, db and helper functions.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs, query, where, limit } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyCfo14oZNbMEa5IBewm6Qji7HLvHBUWnsU",
  authDomain: "haldar-textile-67251.firebaseapp.com",
  projectId: "haldar-textile-67251",
  storageBucket: "haldar-textile-67251.firebasestorage.app",
  messagingSenderId: "902433982705",
  appId: "1:902433982705:web:07ad1ca6519937ea44c150",
  measurementId: "G-EGMMFTGGMG"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Quick check connection by reading a small collection (no heavy reads)
export async function checkFirebaseConnected(){
  try{
    const q = query(collection(db, "products"), limit(1));
    await getDocs(q);
    return true;
  }catch(e){
    console.error("Firebase connection check failed", e);
    return false;
  }
}

// Verify worker key (returns worker doc if found)
export async function verifyWorkerKey(key){
  try{
    if(!key) return null;
    const q = query(collection(db, "workers"), limit(1000));
    const snap = await getDocs(q);
    for(const d of snap.docs){
      const data = d.data();
      if(data && data.key === key) return { id: d.id, data };
    }
    return null;
  }catch(e){
    console.error("verifyWorkerKey error", e);
    return null;
  }
}
