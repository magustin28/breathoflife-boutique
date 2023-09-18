import { NavLink } from "react-router-dom";
import propTypes from "prop-types";
import Brand from "../Brand/Brand";
import CartWidgetContainer from "../CartWidget/CartWidgetContainer";
import styles from "./Navbar.module.css";

const Navbar = ({ title }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container">
        {/* Brand */}
        <Brand />

        {/* Links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100">
          {title.map((elementos) => (
            <li key={elementos.id} className="nav-item me-2">
              <NavLink
                className={`nav-link ${styles.links}`}
                to={`/e-commerce-yoga/${elementos.categoryId === "" ? elementos.page : `categoryId/${elementos.categoryId}`}`}
              >
                {elementos.title}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* CartWignet */}
        <CartWidgetContainer />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: propTypes.array.isRequired,
};

export default Navbar;
