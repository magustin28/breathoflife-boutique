import propTypes from "prop-types";
import { formatCurrency, formatCurrencyWithoutDecimal } from "../../assets/utils";
import style from "./OrderProcessing.module.css";
import DownloaOrderContainer from "../DownloadOrder/DownloaOrderContainer";
import CountdownRedirect from "./CountdownRedirect";

function OrderProcessing({ order, isLoading }) {
  return (
    <>
      {isLoading ? (
        <div className="my-3 d-flex flex-column align-items-center justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mb-0 fs-3">Estamos procesando tu orden...</p>
        </div>
      ) : (
        <div className="mt-5 d-flex justify-content-center">
          <div className={`${style.widthOrder}`}>
            <p className={`fs-4 mb-0 p-2 text-center border rounded border-dark-subtle ${style.bgOrder}`}>Orden confirmada #{order.id}</p>
            <div className="my-4">
              <div className="mb-3 d-flex justify-content-between">
                <p className="mb-0 fw-semibold text-decoration-underline">Datos del comprador</p>
                <p className="mb-0">Fecha de Compra: {order.date ? order.date.toLocaleDateString() : "No disponible"}</p>
              </div>
              <div className="mb-3 d-flex">
                <p className="mb-0 col-3 fw-medium">Comprador:</p>
                <p className="mb-0">{order?.buyer?.name}</p>
              </div>
              <div className="mb-3 d-flex">
                <p className="mb-0 col-3 fw-medium">Email:</p>
                <p className="mb-0">{order?.buyer?.email}</p>
              </div>
              <div className="mb-3 d-flex">
                <p className="mb-0 col-3 fw-medium">Teléfono:</p>
                <p className="mb-0">{order?.buyer?.phone}</p>
              </div>
              <div className="mb-3 d-flex">
                <p className="mb-0 col-3 fw-medium">Forma de pago:</p>
                <p className="mb-0">{order.paymentMethods}</p>
              </div>
              <div className="mb-3 d-flex">
                <p className="mb-0 col-3 fw-medium">Envio:</p>
                <p className={`mb-0 ${typeof order.shippingCost !== "number" ? `${style.ship} fw-semibold` : ""}`}>
                  {formatCurrency(order.shippingCost)}
                </p>
              </div>
            </div>
            <div className="my-4">
              <p className="mb-0 fw-semibold text-decoration-underline">Detalle de la compra</p>
              <ul>
                {order.items.map((product) => (
                  <li key={product.id} className="my-3">
                    <span className="me-2">{product.name}</span>
                    <span className="me-2">(c/u {formatCurrencyWithoutDecimal(product.price)})</span> x {product.quantity}{" "}
                    {product.quantity === 1 ? `unidad` : `unidades`}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 d-flex">
              <p className="mb-0 col-2 fs-4 fw-medium">Total:</p>
              <p className="mb-0 fs-4 fw-medium">{formatCurrency(order.total)}</p>
            </div>
            <div className="mt-4 d-flex justify-content-between align-items-center">
              <DownloaOrderContainer order={order} />
              <CountdownRedirect seconds={15} to="/e-commerce-yoga/" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

OrderProcessing.propTypes = {
  order: propTypes.object.isRequired,
  isLoading: propTypes.bool.isRequired,
};

export default OrderProcessing;
