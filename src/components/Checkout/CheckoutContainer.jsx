import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";
import Checkout from "./Checkout";
import { PaymentMethods } from "../../assets/firebase";

function CheckoutContainer() {
  const { cart, updateOrder } = useContext(CartContext);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [isFormComplete, setFormComplete] = useState(false);
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

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const validarEmail = (email) => email.includes("@") && email.includes(".com");

  const validarPhone = (phone) => {
    phone = phone.replace(/\s+/g, "").replace(/-/g, "");
    return /^\d{10,}$/.test(phone);
  };

  useEffect(() => {
    const isDataComplete =
      name && validarEmail(email) && validarPhone(phone) && selectedOption !== null && selectedOption !== undefined && selectedOption !== "";

    if (isDataComplete) {
      setFormComplete(true);
    }
  }, [name, email, phone, selectedOption]);

  const handleCheckout = () => {
    const buyer = {
      name: name,
      email: email,
      phone: phone,
    };
    updateOrder(buyer, selectedOption);
    navigate("/e-commerce-yoga/order");
  };

  return (
    <Checkout
      name={name}
      email={email}
      phone={phone}
      handleChange={onChange}
      productsInCart={cart}
      paymentMethods={PaymentMethods}
      selectedOption={selectedOption}
      handleRadioChange={handleRadioChange}
      buy={handleCheckout}
      isFormComplete={isFormComplete}
    />
  );
}
export default CheckoutContainer;
