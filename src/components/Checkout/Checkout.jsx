import PropTypes, { oneOfType } from "prop-types";
import { formatCurrency, formatCurrencyWithoutDecimal } from "../../assets/utils";
import style from "./Checkout.module.css";

function Checkout({
  name,
  email,
  phone,
  handleChange,
  productsInCart,
  paymentMethods,
  selectedOption,
  handleRadioChange,
  buy,
  isFormComplete,
  getCartQuantity,
  getTotalPrice,
  shippingCost,
  getTotalCount,
}) {
  return (
    <div className="d-flex justify-content-center my-5 mx-2 gap-4">
      <div className="col-10 ">
        <div className={`border rounded border-dark-subtle fs-5 pb-4 ${style.bgcheckout}`}>
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
          <div className={`flex-grow-1 border rounded border-dark-subtle fs-5 ${style.bgcheckout}`}>
            <div className="border-bottom border-dark-subtle">
              <p className="ms-4 mt-3 fw-semibold fs-5">Detalle de productos</p>
            </div>
            <div>
              {productsInCart && productsInCart.length > 0 ? (
                <>
                  {productsInCart.map((product) => (
                    <div key={product.id} className="my-3">
                      <div className="mx-4 d-flex justify-content-between align-items-center">
                        <p className="col-7 mb-2 text-start">
                          {product.name} (c/u {formatCurrencyWithoutDecimal(product.price)}) x {product.quantity}{" "}
                          {product.quantity === 1 ? `unidad` : `unidades`}
                        </p>
                        <p className="mb-2 text-end">{formatCurrency(product.price * product.quantity)}</p>
                      </div>
                    </div>
                  ))}
                </>
              ) : null}
            </div>
          </div>
          <div className={`col-4 border rounded border-dark-subtle pb-4 ${style.bgcheckout}`}>
            <div className="border-bottom border-dark-subtle">
              <p className="ms-4 mt-3 fw-semibold fs-5">Resumen de compra</p>
            </div>
            <div className="d-flex justify-content-between mt-1">
              <p className="ms-4 mt-3 mb-0">Productos ({getCartQuantity})</p>
              <p className="me-4 mt-3 mb-0">{formatCurrency(getTotalPrice)}</p>
            </div>
            <div className="d-flex justify-content-between mt-1">
              <p className="ms-4 mb-0">Envío</p>
              <p className={`me-4 mb-0 ${typeof shippingCost !== "number" ? `${style.ship} fw-semibold` : ""}`}>
                {typeof shippingCost === "number" ? formatCurrency(shippingCost) : shippingCost}
              </p>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <p className="ms-4 mb-0 fs-5 fw-bolder">Total</p>
              <p className="me-4 mb-0 fs-5 fw-bolder">{formatCurrency(getTotalCount)}</p>
            </div>
          </div>
        </div>
        <div className={`d-flex justify-content-between align-items-center mt-3 py-2 border rounded border-dark-subtle ${style.bgcheckout}`}>
          <div className="flex-grow-1 d-flex me-5 justify-content-between align-items-center">
            <p className="mb-0 ms-4 fw-semibold fs-5">Formas de Pago</p>
            <div className="col-7 d-flex justify-content-between gap-2">
              {paymentMethods.map((paymentMethod) => (
                <div key={paymentMethod.id}>
                  <label className="d-flex gap-2">
                    <input type="radio" value={paymentMethod.method} checked={selectedOption === paymentMethod.method} onChange={handleRadioChange} />
                    {paymentMethod.method}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <button
            className={`col-3 mb-0 me-4 py-2 ${isFormComplete ? `btn btn-primary` : `btn btn-secondary`}`}
            onClick={buy}
            disabled={!isFormComplete}
          >
            Comprar
          </button>
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
  selectedOption: PropTypes.string,
  handleRadioChange: PropTypes.func,
  buy: PropTypes.func,
  isFormComplete: PropTypes.bool,
  getCartQuantity: PropTypes.number.isRequired,
  getTotalPrice: PropTypes.number.isRequired,
  shippingCost: oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  getTotalCount: PropTypes.number.isRequired,
};

export default Checkout;
