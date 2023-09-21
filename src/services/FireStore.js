import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  addDoc,
  query,
  where,
  collection,
  getDocs,
  Timestamp,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBZXiRk2YqNvvYQ4HXck7KiYPfWi5yCw1s",
  authDomain: "entregafinalzalazar.firebaseapp.com",
  projectId: "entregafinalzalazar",
  storageBucket: "entregafinalzalazar.appspot.com",
  messagingSenderId: "729682323131",
  appId: "1:729682323131:web:686517fbc4afe637e8eb9e",
  measurementId: "G-W6PC4WRVJJ",
};

const app = initializeApp(firebaseConfig);
const fireStoreDb = getFirestore(app);

export default fireStoreDb;

// Obtengo todos los items de la DB

export async function getAllItems() {
  const miColec = collection(fireStoreDb, "items");
  const itemsSnapshot = await getDocs(miColec);

  console.log(itemsSnapshot);

  return itemsSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
}

export async function getItemsByCategory(categoryid) {
  const miColec = collection(fireStoreDb, "items");
  const queryItem = query(miColec, where("category", "==", categoryid));
  const itemSnapshot = await getDocs(queryItem);

  return itemSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
}

export async function getItem(id) {
  const miColec = collection(fireStoreDb, "items");
  const itemRef = doc(miColec, id);
  const itemSnapshot = await getDoc(itemRef);

  return {
    ...itemSnapshot.data(),
    id: itemSnapshot.id,
  };
}

export async function createBuyOrder(orderData) {
  const buyTimeStamp = Timestamp.now();
  const orderWithDate = {
    ...orderData,
    date: buyTimeStamp,
  };
  const miColec = collection(fireStoreDb, "buyOrders");
  const orderDoc = await addDoc(miColec, orderWithDate);
  console.log("Orden: ", orderDoc.id);
  return orderDoc.id;
}
