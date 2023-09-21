import Cart from "./Cart";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

function CartContainer() {
  const { cart, increaseQuantity, decreaseQuantity, removeItem, clearCart, getCartQuantity, getTotalPrice, shippingCost, getTotalCount } =
    useContext(CartContext);

  return (
    <Cart
      productsInCart={cart}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      removeItem={removeItem}
      clearCart={clearCart}
      getCartQuantity={getCartQuantity()}
      getTotalPrice={getTotalPrice()}
      shippingCost={shippingCost()}
      getTotalCount={getTotalCount()}
    />
  );
}
export default CartContainer;
