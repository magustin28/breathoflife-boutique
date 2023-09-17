import { useState, useEffect, useContext } from "react";
import { getOrderNumber } from "../../assets/services";
import OrderProcessing from "./OrderProcessing";
import CartContext from "../../context/CartContext";

function OrderProcessingContainer() {
  const { order, updateOrder } = useContext(CartContext);
  const [isLoading, setisLoading] = useState(false);

  /* useEffect(() => {
    getOrderNumber().then((response) => {
      updateOrder(response, new Date());
      setisLoading(false);
    });
  }, []); */

  const orderSet = {
    buyer: {
      name: "Agustin Martinez",
      email: "agustin.m92@gmail.com",
      phone: "03571592692",
    },
    items: [
      {
        id: "1",
        name: "Mat Superior Elementos Lila",
        quantity: 2,
        price: "80.000",
      },
      {
        id: "3",
        name: "Mat Aprendiz Pilates by Oxzen",
        quantity: 1,
        price: "55.000",
      },
      {
        id: "11",
        name: "Legging 7/8 Yoga Glow",
        quantity: 2,
        price: "20.500",
      },
    ],
    envio: "Gratis",
    total: 256000,
    paymentMethods: "MercadoPago",
    date: new Date(),
    id: "bl5b4359NpFDsUUhCRlcIbErfnVp",
  };

  return (
    <div className="">
      <OrderProcessing order={orderSet} isLoading={isLoading} />
    </div>
  );
}
export default OrderProcessingContainer;
