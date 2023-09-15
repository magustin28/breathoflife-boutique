import { useState, useContext, useEffect } from "react";
import CartWignet from "./CartWidget";
import CartContext from "../../context/CartContext";

const CartWidgetContainer = () => {
  const { cart, getCartQuantity } = useContext(CartContext);
  const [quantityInCart, setQuantityInCart] = useState(null);

  useEffect(() => {
    setQuantityInCart(getCartQuantity);
  }, [cart]);

  return <CartWignet quantityInCart={quantityInCart} />;
};

export default CartWidgetContainer;
