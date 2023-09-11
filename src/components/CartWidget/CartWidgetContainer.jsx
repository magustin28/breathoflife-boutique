import { useState, useContext, useEffect } from "react";
import CartWignet from "./CartWidget";
import CartContext from "../../context/CartContext";

const CartWidgetContainer = () => {
  const { cart, sumarQuantity } = useContext(CartContext);
  const [quantityInCart, setQuantityInCart] = useState(null);

  useEffect(() => {
    setQuantityInCart(sumarQuantity);
  }, [cart]);

  return <CartWignet quantityInCart={quantityInCart} />;
};

export default CartWidgetContainer;
