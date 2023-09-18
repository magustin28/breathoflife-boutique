import { products } from "./firebase";
import { doc, getDoc, collection, addDoc, getFirestore } from "firebase/firestore";

export const getItem = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id);
      if (product) {
        resolve(product);
      } else {
        reject("Producto no encontrado");
      }
    });
  });
};

export const getItems = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtroProductos = categoryId ? products.filter((product) => product.categoryId === categoryId) : products;
      resolve(filtroProductos);
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
