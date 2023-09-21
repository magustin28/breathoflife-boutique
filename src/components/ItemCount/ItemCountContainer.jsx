import { useState } from "react";
import { useContext } from "react";
import ItemCount from "./ItemCount";
import CartContext from "../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemCountContainer = ({ stock, isInStock, item }) => {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const notification = () => {
    toast.info("Producto Agregado", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      closeButton: false,
      progress: undefined,
      theme: "colored",
    });
  };

  const increaseQuantity = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    addItem(item, quantity);
    notification();
  };

  return (
    <>
      <ItemCount
        quantity={quantity}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        isInStock={isInStock}
        addToCart={addToCart}
      />
      <ToastContainer />
    </>
  );
};

export default ItemCountContainer;
