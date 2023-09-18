import { useState, useEffect, useContext } from "react";
import { serverTimestamp } from "firebase/firestore";
import { createOrder, getDateOfOrder } from "../../assets/services";
import OrderProcessing from "./OrderProcessing";
import CartContext from "../../context/CartContext";

function OrderProcessingContainer() {
  const { order, clearCart, updateOrderId, updateOrderDate } = useContext(CartContext);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    createOrder({ date: serverTimestamp(), ...order })
      .then((docRef) => {
        updateOrderId(docRef.id);
        getDateOfOrder(docRef.id).then((date) => {
          updateOrderDate(date);
          clearCart();
          setisLoading(false);
        });
      })
      .catch((error) => {
        console.error("Error al crear la orden:", error);
      });
  }, []);

  return (
    <div className="">
      <OrderProcessing order={order} isLoading={isLoading} />
    </div>
  );
}
export default OrderProcessingContainer;
