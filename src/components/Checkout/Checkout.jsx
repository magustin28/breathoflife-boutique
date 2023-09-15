import PropTypes from "prop-types";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { formatCurrency } from "../../assets/utils";
import style from "../Cart/Cart.module.css";

function Checkout({ name, email, phone, handleChange, productsInCart, paymentMethods, selectedOption, handleRadioChange, buy }) {
  const { getCartQuantity, getTotalPrice, shippingCost, getTotalCount } = useContext(CartContext);

  return (
    <div className="d-flex justify-content-center mt-5 mx-2 gap-4">
      <div className="col-10 ">
        <div className={`border rounded border-dark-subtle fs-5 pb-4 ${style.bgcart}`}>
          <div className="border-bottom border-dark-subtle">
            <p className="ms-4 mt-3 fw-semibold fs-5">Datos de contacto</p>
          </div>
          <div className="mt-3 ms-4 ">
            <div className="d-flex">
              <p className="col-3 mb-0">Nombre y Apellido</p>
              <input className="col-6 mb-3 ps-2 rounded-3" type="text" name="name" value={name} onChange={handleChange} placeholder="Juan Perez" />
            </div>
            <div className="d-flex">
              <p className="col-3 mb-0">Email</p>
              <input
                className="col-6 mb-3 ps-2 rounded-3"
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="juanperez@email.com"
              />
            </div>
            <div className="d-flex">
              <p className="col-3 mb-0">Teléfono</p>
              <input className="col-6 mb-3 ps-2 rounded-3" type="text" name="phone" value={phone} onChange={handleChange} placeholder="1175315914" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3 gap-3">
          <div className={`flex-grow-1 border rounded border-dark-subtle fs-5 ${style.bgcart}`}>
            <div className="border-bottom border-dark-subtle">
              <p className="ms-4 mt-3 fw-semibold fs-5">Detalle de productos</p>
            </div>
            <div>
              {productsInCart && productsInCart.length > 0 ? (
                <>
                  {productsInCart.map((product) => (
                    <div key={product.id} className="my-3">
                      <div className="d-flex justify-content-between mx-4">
                        <p className="col-7 mb-2 text-start">
                          {product.name} <span className="mx-3"> x </span>
                          {product.quantity}
                        </p>
                        <p className="mb-2 text-end">{formatCurrency(parseFloat(product.price) * 1000 * product.quantity)}</p>
                      </div>
                    </div>
                  ))}
                </>
              ) : null}
            </div>
          </div>
          <div className={`col-4 border rounded border-dark-subtle pb-4 ${style.bgcart}`}>
            <div className="border-bottom border-dark-subtle">
              <p className="ms-4 mt-3 fw-semibold fs-5">Resumen de compra</p>
            </div>
            <div className="d-flex justify-content-between mt-1">
              <p className="ms-4 mt-3 mb-0">Productos ({getCartQuantity()})</p>
              <p className="me-4 mt-3 mb-0">{formatCurrency(getTotalPrice())}</p>
            </div>
            <div className="d-flex justify-content-between mt-1">
              <p className="ms-4 mb-0">Envío</p>
              <p className={`me-4 mb-0 ${typeof shippingCost() !== "number" ? `${style.envio} fw-semibold` : ""}`}>
                {typeof shippingCost() === "number" ? formatCurrency(shippingCost()) : shippingCost()}
              </p>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <p className="ms-4 mb-0 fs-5 fw-bolder">Total</p>
              <p className="me-4 mb-0 fs-5 fw-bolder">{formatCurrency(getTotalCount())}</p>
            </div>
          </div>
        </div>
        <div className={`d-flex justify-content-between align-items-center mt-3 border rounded border-dark-subtle ${style.bgcart}`}>
          <div className="flex-grow-1 d-flex me-5 justify-content-between align-items-center">
            <p className="mb-0 ms-4 fw-semibold fs-5">Formas de Pago</p>
            {paymentMethods.map((method) => (
              <div key={method.id} className="my-3">
                <label className="d-flex gap-2">
                  <input
                    className=""
                    type="radio"
                    id={method.id}
                    name="opciones"
                    value={method.id}
                    checked={selectedOption === method.id}
                    onChange={handleRadioChange}
                  />
                  {method.method}
                </label>
              </div>
            ))}
          </div>
          <p className="col-3 mb-0 me-4 py-2 btn btn-primary" onClick={buy}>
            Comprar
          </p>
        </div>
      </div>
    </div>
  );
}

Checkout.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  productsInCart: PropTypes.array.isRequired,
  paymentMethods: PropTypes.array.isRequired,
  selectedOption: PropTypes.number,
  handleRadioChange: PropTypes.func,
};

export default Checkout;
