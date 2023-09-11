import Checkout from "./Checkout";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";

function CheckoutContainer() {
  const { cart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  return (
    <Checkout
      name={name}
      email={email}
      phone={phone}
      handleChangeName={handleChangeName}
      handleChangeEmail={handleChangeEmail}
      handleChangePhone={handleChangePhone}
      productsInCart={cart}
    />
  );
}
export default CheckoutContainer;
