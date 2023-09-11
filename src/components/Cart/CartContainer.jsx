import Cart from "./Cart";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

function CartContainer() {
  const { cart } = useContext(CartContext);

  return <Cart productsInCart={cart} />;
}
export default CartContainer;
