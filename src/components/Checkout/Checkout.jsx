import PropTypes from "prop-types";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { formatoPesos } from "../../assets/funciones";
import style from "../Cart/Cart.module.css";

function Checkout({ name, email, phone, handleChangeName, handleChangeEmail, handleChangePhone, productsInCart }) {
  const { sumarQuantity, sumarPrice, envio, sumarTotal } = useContext(CartContext);

  return (
    <div className="d-flex justify-content-center mt-5 mx-2 gap-4">
      <div className="col-8">
        <div className={`border rounded border-dark-subtle fs-5 pb-4 ${style.bgcart}`}>
          <div className="border-bottom border-dark-subtle">
            <p className="ms-4 mt-3 fw-semibold fs-5">Datos de contacto</p>
          </div>
          <div className="mt-3 ms-4 ">
            <p className="mb-0">Nombre y Apellido</p>
            <input className="col-8" type="text" value={name} onChange={handleChangeName} />
            <p className="mb-0">Email</p>
            <input className="col-8" type="text" value={email} onChange={handleChangeEmail} />
            <p className="mb-0">Teléfono</p>
            <input className="col-8" type="text" value={phone} onChange={handleChangePhone} />
          </div>
        </div>
        <div className={`mt-5 border rounded border-dark-subtle fs-5 ${style.bgcart}`}>
          <div className="border-bottom border-dark-subtle">
            <p className="ms-4 mt-3 fw-semibold fs-5">Detalle de productos</p>
          </div>
          <div>
            {productsInCart && productsInCart.length > 0 ? (
              <>
                {productsInCart.map((product) => (
                  <div key={product.id} className="my-3">
                    <div className="d-flex justify-content-between mx-4">
                      <p className="col-6 mb-2 text-start">
                        {product.name} <span className="mx-3"> x </span>
                        {product.quantity}
                      </p>
                      <p className="mb-2 text-end">{formatoPesos(parseFloat(product.price) * 1000 * product.quantity)}</p>
                    </div>
                  </div>
                ))}
              </>
            ) : null}
          </div>
        </div>
        <div className={`mt-5 border rounded border-dark-subtle ${style.summaryContainer} ${style.bgcart}`}>
          <div className="border-bottom border-dark-subtle">
            <p className="ms-4 mt-3 fw-semibold fs-5">Resumen de compra</p>
          </div>
          <div className="d-flex justify-content-between mt-1">
            <p className="ms-4 mt-3 mb-0">Productos ({sumarQuantity()})</p>
            <p className="me-4 mt-3 mb-0">{formatoPesos(sumarPrice())}</p>
          </div>
          <div className="d-flex justify-content-between mt-1">
            <p className="ms-4 mb-0">Envío</p>
            <p className={`me-4 mb-0 ${typeof envio() !== "number" ? `${style.envio} fw-semibold` : ""}`}>
              {typeof envio() === "number" ? formatoPesos(envio()) : envio()}
            </p>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <p className="ms-4 mb-0 fs-5 fw-bolder">Total</p>
            <p className="me-4 mb-0 fs-5 fw-bolder">{formatoPesos(sumarTotal())}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Checkout.propTypes = {
  productsInCart: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  handleChangeName: PropTypes.func.isRequired,
  handleChangeEmail: PropTypes.func.isRequired,
  handleChangePhone: PropTypes.func.isRequired,
};

export default Checkout;
