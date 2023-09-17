import { useState, useEffect } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState({
    buyer: null,
    items: [],
    total: 0,
    paymentMethods: null,
    date: null,
    id: null,
  });

  const amountShipping = 80000;

  const isInCart = (id) => {
    const itemInCart = cart.find((item) => item.id === id);
    return !!itemInCart;
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("historyCart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("historyCart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("historyOrder", JSON.stringify(order));
  }, [order]);

  //Funcion de ItemCount
  const addItem = (product, quantity) => {
    const itemInCart = isInCart(product.id);
    if (itemInCart) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  //Funciones de Cart
  const increaseQuantity = (productId) => {
    setCart((newCart) => {
      return newCart.map((item) => {
        if (item.id === productId && item.quantity < item.stock) {
          return {
            ...item,
            quantity: (item.quantity || 0) + 1,
          };
        }
        return item;
      });
    });
  };

  const decreaseQuantity = (productId) => {
    setCart((newCart) => {
      return newCart.map((item) => {
        if (item.id === productId) {
          const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      });
    });
  };

  const removeItem = (productId) => {
    const newCart = cart.filter((item) => item.id !== productId);
    if (newCart.length === 0) {
      localStorage.removeItem("historyCart");
    }
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartQuantity = () => {
    const totalQuantity = cart.reduce((acc, item) => {
      if (item.hasOwnProperty("quantity")) {
        return acc + item.quantity;
      }
      return acc;
    }, 0);
    return totalQuantity;
  };

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((acc, item) => {
      if (item.hasOwnProperty("quantity") && item.hasOwnProperty("price")) {
        return acc + item.quantity * parseFloat(item.price) * 1000;
      }
      return acc;
    }, 0);
    return totalPrice;
  };

  const shippingCost = () => {
    if (getTotalPrice() > amountShipping) {
      return "Gratis";
    } else {
      return 1500;
    }
  };

  const getTotalCount = () => {
    if (typeof shippingCost() === "number") {
      return getTotalPrice() + shippingCost();
    }
    return getTotalPrice();
  };

  //Funciones de Checkout
  const mapCartToOrderItems = () => {
    return cart.map((item) => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    }));
  };

  const updateBuyerAndPaymentMethods = (buyer, paymentMethods) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      buyer: buyer,
      paymentMethods: paymentMethods,
    }));
  };

  const updateOrder = (id, date) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      items: mapCartToOrderItems(),
      total: getTotalCount(),
      id: id,
      date: date,
    }));
  };

  const clearOrder = () => {
    setOrder([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        order,
        amountShipping,
        isInCart,
        addItem,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart,
        getCartQuantity,
        getTotalPrice,
        shippingCost,
        getTotalCount,
        updateBuyerAndPaymentMethods,
        updateOrder,
        clearOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
