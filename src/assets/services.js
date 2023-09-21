import { doc, getDoc, collection, getDocs, addDoc, query, where, getFirestore } from "firebase/firestore";

export const getCollectionData = (collectionName) => {
  return new Promise((resolve, reject) => {
    const db = getFirestore();
    const CollectionRef = collection(db, collectionName);

    getDocs(CollectionRef)
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getItem = (id) => {
  return new Promise((resolve, reject) => {
    const db = getFirestore();
    const itemDoc = doc(db, "products", id);

    getDoc(itemDoc)
      .then((doc) => {
        if (doc.exists()) {
          resolve({ id: doc.id, ...doc.data() });
        } else {
          resolve(null);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getItems = (categoryId) => {
  return new Promise((resolve) => {
    const db = getFirestore();
    const productsCollectionRef = collection(db, "products");

    let q;
    if (categoryId) {
      q = query(productsCollectionRef, where("categoryId", "==", categoryId));
    } else {
      q = query(productsCollectionRef);
    }

    getDocs(q)
      .then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        resolve(products);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const createOrder = (order) => {
  const db = getFirestore();
  const ordersCollection = collection(db, "orders");
  return addDoc(ordersCollection, order);
};

export const getDateOfOrder = (docRef) => {
  const db = getFirestore();
  const orderDocRef = doc(db, "orders", docRef);
  return new Promise((resolve, reject) => {
    getDoc(orderDocRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const orderData = docSnapshot.data();
          const timestamp = orderData.date;
          const date = timestamp.toDate();
          resolve(date);
        }
      })
      .catch((error) => {
        console.error("Error al obtener la orden:", error);
        reject(error);
      });
  });
};
