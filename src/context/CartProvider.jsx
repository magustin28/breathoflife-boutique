import { useState, useEffect } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const importeEnvio = 80000;

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
  const addItem = (id, name, quantity, price) => {
    const itemInCart = cart.find((item) => item.id === id);
    if (itemInCart) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { id, name, quantity, price }]);
    }
  };

  //Funciones de Cart

  const increaseQuantity = (productId) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === productId) {
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
    setCart((prevCart) => {
      return prevCart.map((item) => {
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
    const prevCart = cart.filter((item) => item.id !== productId);
    if (prevCart.length === 0) {
      localStorage.removeItem("historyCart");
    }
    setCart(prevCart);
  };

  const clear = () => {
    setCart([]);
  };

  const sumarQuantity = () => {
    const suma = cart.reduce((acumulador, objeto) => {
      if (objeto.hasOwnProperty("quantity")) {
        return acumulador + objeto.quantity;
      }
      return acumulador;
    }, 0);
    return suma;
  };

  const sumarPrice = () => {
    const suma = cart.reduce((acumulador, objeto) => {
      if (objeto.hasOwnProperty("quantity") && objeto.hasOwnProperty("price")) {
        return acumulador + objeto.quantity * parseFloat(objeto.price) * 1000;
      }
      return acumulador;
    }, 0);
    return suma;
  };

  const envio = () => {
    if (sumarPrice() > importeEnvio) {
      return "Gratis";
    } else {
      return 1500;
    }
  };

  const sumarTotal = () => {
    if (typeof envio() === "number") {
      return sumarPrice() + envio();
    }
    return sumarPrice();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        importeEnvio,
        addItem,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clear,
        sumarQuantity,
        sumarPrice,
        envio,
        sumarTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
