import Brand from "../Brand/Brand";
import CartWidgetContainer from "../CartWidget/CartWidgetContainer";
import styles from './Navbar.module.css';

const Navbar = ({ title }) => {

    return (
        <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
            <div className="container">
                {/* Brand */}
                <Brand />

                {/* Links */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100">
                    {title.map((elementos) => (
                        <li key={elementos.id} className="nav-item mx-2">
                            <a className={`nav-link ${styles.links}`} href="#">{elementos.title}</a>
                        </li>
                    )
                    )}
                </ul>

                {/* CartWignet */}
                <CartWidgetContainer />

            </div>
        </nav>
    );
};

export default Navbar;