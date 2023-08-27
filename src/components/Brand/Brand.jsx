import { Link } from "react-router-dom";
import styles from "./Brand.module.css";

const Brand = ({ }) => {
    return (
        <div className="d-flex align-items-center gap-2">
            <Link className={`navbar-brand ${styles.brand}`} to="/e-commerce-yoga/">BreathOfLife Boutique</Link>
        </div>
    );
};

export default Brand;