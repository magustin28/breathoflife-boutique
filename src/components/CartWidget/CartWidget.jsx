import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CartWignet = ({ quantityInCart }) => {
  return (
    <div>
      {quantityInCart === 0 ? (
        <Link className="nav-link" to="/e-commerce-yoga/cart">
          <button className="btn btn-outline position-relative">
            <i className="bi bi-cart"></i>
          </button>
        </Link>
      ) : (
        <button className="btn btn-outline position-relative">
          <Link className="nav-link" to="/e-commerce-yoga/cart">
            <i className="bi bi-cart">
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {quantityInCart}
                <span className="visually-hidden">Productos en el Carritos</span>
              </span>
            </i>
          </Link>
        </button>
      )}
    </div>
  );
};

CartWignet.propTypes = {
  quantityInCart: PropTypes.number,
};

export default CartWignet;
