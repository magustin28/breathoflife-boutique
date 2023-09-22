import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./ItemList.module.css";
import { formatCurrencyWithoutDecimal, imgProducts } from "../../assets/utils";

const ItemList = ({ products, isLoading, amountShipping }) => {
  return (
    <>
      <div className={`my-3 p-2 text-center text-bg-light rounded-3 shadow ${style.containerCustom}`}>
        <p className={`mb-0 ${style.showShipping}`}>ENVÍO GRATIS EN COMPRAS MAYORES A {formatCurrencyWithoutDecimal(amountShipping)}</p>
      </div>
      <h2 className={`my-3 text-center ${style.title}`}>Productos</h2>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className={`spinner-border ${style.isLoading}`} role="status">
            <span className="visually-hidden text-center">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row d-flex justify-content-center">
          {products.map((item) => (
            <div key={item.id} className={`card col-3 m-3 shadow ${style.bgcard}`}>
              {item.stock === 0 && <span className={style.outStock}>Sin Stock</span>}
              <img
                className={`card-img-top mt-2 pt-2 ${style.productImage} ${item.img.includes("legging") ? `${style.productImageLegging}` : ""}`}
                src={imgProducts[item.img]}
                alt={item.name}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title h-25 pb-3 fw-normal">{item.name}</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="my-2 mx-4 fs-5 fw-bolder">{formatCurrencyWithoutDecimal(item.price)}</p>
                  <p className="my-2 mx-4 badge text-bg-success">{item.categoryId}</p>
                </div>
                <Link to={`/e-commerce-yoga/item/${item.id}`} className="btn btn-light">
                  Ver detalle
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

ItemList.propTypes = {
  products: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  amountShipping: PropTypes.number.isRequired,
};

export default ItemList;
