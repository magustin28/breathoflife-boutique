import PropTypes from "prop-types";
import { formatCurrency, formatCurrencyWithoutDecimal } from "../../assets/utils";
import { useContext } from "react";
import style from "./Cart.module.css";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

function Cart({ productsInCart }) {
  const { cart, increaseQuantity, decreaseQuantity, removeItem, clearCart, getCartQuantity, getTotalPrice, shippingCost, getTotalCount } =
    useContext(CartContext);

  return (
    <div className="d-flex justify-content-center mt-5">
      {cart.length === 0 ? (
        <div className={`col-7 me-4 py-5 text-center border border-dark-subtle ${style.bgcart}`}>
          <i className={`bi bi-bag ${style.bag}`}></i>
          <div className="mb-4">
            <p className="fw-medium mt-2 mb-1">¡Empieza un carrito de compras!</p>
            <p className="mb-0">Sumá productos y conseguí envío gratis.</p>
          </div>
          <Link className="col-5 btn btn-primary" to={"/e-commerce-yoga/"}>
            Descubrir productos
          </Link>
        </div>
      ) : (
        <div className={`col-7 me-4 border-start border-top border-end rounded border-dark-subtle ${style.bgcart}`}>
          <div className="border-bottom border-dark-subtle d-flex justify-content-between align-items-center">
            <p className="ms-4 mt-3 fw-semibold">Productos</p>
            <p className={`mb-0 me-3 ${style.removeItem}`} onClick={clearCart}>
              Vaciar Carrito
            </p>
          </div>
          <div className="mt-3">
            {productsInCart.map((product) => (
              <div key={product.id} className="border-bottom border-dark-subtle">
                <div className="d-flex flex-column mx-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="col-6 mb-0 text-start">
                      {product.name} ~ (c/u {formatCurrencyWithoutDecimal(product.price)})
                    </p>
                    <div className="d-flex justify-content-around align-items-center border border-secondary-subtle rounded bg-light my-3 col-2">
                      <i className="bi bi-dash text-primary fs-4" onClick={() => decreaseQuantity(product.id)}></i>
                      <p className="mb-0">{product.quantity}</p>
                      <i className="bi bi-plus text-primary fs-4" onClick={() => increaseQuantity(product.id)}></i>
                    </div>
                    <p className="col-3 mb-0 text-end">{formatCurrency(product.price * product.quantity)}</p>
                  </div>
                  <div className="d-flex justify-content-start mb-2">
                    <p className={`col-6 mb-0 ${style.removeItem}`} onClick={() => removeItem(product.id)}>
                      Eliminar
                    </p>
                    <p className="ms-5 mb-0 text center">{product.stock} disponibles </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className={`col-4 border rounded border-dark-subtle ${style.summaryContainer} ${style.bgcart}`}>
        {cart.length === 0 ? (
          <div className="border-bottom border-dark-subtle">
            <p className="ms-3 mt-3">Resumen de compra</p>
          </div>
        ) : (
          <div>
            <div className="border-bottom border-dark-subtle">
              <p className="ms-4 mt-3 fw-semibold">Resumen de compra</p>
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
            <div className="text-center mt-4">
              <Link className="px-5 py-2 btn btn-primary" to={"/e-commerce-yoga/checkout"}>
                Terminar mi compra
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Cart.propTypes = {
  productsInCart: PropTypes.array.isRequired,
};

export default Cart;
