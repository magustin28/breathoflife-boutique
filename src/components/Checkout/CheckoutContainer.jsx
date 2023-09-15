import Checkout from "./Checkout";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { PaymentMethods } from "../../assets/elementosNavbar";

function CheckoutContainer() {
  const { cart } = useContext(CartContext);
  const [selectedOption, setSelectedOption] = useState(1);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { name, email, phone } = formState;

  const onChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckboxChange = (event) => {
    setSelectedOption(event.target.value);
  };

  console.log(selectedOption);

  return (
    <Checkout
      name={name}
      email={email}
      phone={phone}
      handleChange={onChange}
      productsInCart={cart}
      paymentMethods={PaymentMethods}
      checked={selectedOption}
      handleCheckboxChange={handleCheckboxChange}
    />
  );
}
export default CheckoutContainer;
