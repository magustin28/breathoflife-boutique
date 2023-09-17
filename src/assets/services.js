import { products } from "./firebase";
import { generateSimpleId } from "./utils";

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

export const getItems = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtroProductos = category ? products.filter((product) => product.category === category) : products;
      resolve(filtroProductos);
    });
  });
};

export const getOrderNumber = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const orderNumber = generateSimpleId();
      resolve(orderNumber);
    }, 3000);
  });
};

const createOrder = (orden) => {
  localStorage.setItem("historyOrders", JSON.stringify(orden));
};
