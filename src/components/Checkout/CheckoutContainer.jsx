import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";
import Checkout from "./Checkout";
import { getCollectionData } from "../../assets/services";

function CheckoutContainer() {
  const { cart, updateOrder, getCartQuantity, getTotalPrice, shippingCost, getTotalCount } = useContext(CartContext);
  const navigate = useNavigate();
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedOption, setSelectedOption] = useState(false);
  const [isFormComplete, setFormComplete] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    getCollectionData("paymentMethods").then((response) => {
      setPaymentMethods(response);
    });
  }, []);

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

  const validateEmail = (email) => {
    const atIndex = email.indexOf("@");
    const dotComIndex = email.indexOf(".com");
    return atIndex !== -1 && dotComIndex !== -1 && atIndex < dotComIndex;
  };

  const validatePhone = (phone) => {
    phone = phone.replace(/\s+/g, "").replace(/-/g, "");
    return /^\d{10,}$/.test(phone);
  };

  useEffect(() => {
    const isDataComplete = name && validateEmail(email) && validatePhone(phone) && selectedOption;
    setFormComplete(isDataComplete);
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
      paymentMethods={paymentMethods}
      selectedOption={selectedOption}
      handleRadioChange={handleRadioChange}
      buy={handleCheckout}
      isFormComplete={isFormComplete}
      getCartQuantity={getCartQuantity()}
      getTotalPrice={getTotalPrice()}
      shippingCost={shippingCost()}
      getTotalCount={getTotalCount()}
    />
  );
}
export default CheckoutContainer;
