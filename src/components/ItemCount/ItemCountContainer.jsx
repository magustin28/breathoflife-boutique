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

  const incrementar = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementar = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const agregarAlCarrito = () => {
    addItem(item.id, item.name, quantity, item.price);
    notification();
  };

  return (
    <div>
      <ItemCount quantity={quantity} incrementar={incrementar} decrementar={decrementar} isInStock={isInStock} agregarCarrito={agregarAlCarrito} />
      <ToastContainer />
    </div>
  );
};

export default ItemCountContainer;
