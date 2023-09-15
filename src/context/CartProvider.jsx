import { useState, useEffect } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    const itemInCart = cart.find((item) => item.id === id);
    return !!itemInCart;
  };

  const amountShipping = 80000;

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("historyCart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("historyCart", JSON.stringify(cart));
    }
  }, [cart]);

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

  return (
    <CartContext.Provider
      value={{
        cart,
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
