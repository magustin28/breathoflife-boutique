import styles from "./Brand.module.css";


const Brand = ({ }) => {
    return (
        <div className="d-flex align-items-center gap-2">
            <a className={`navbar-brand ${styles.brand}`} href="/">BreathOfLife Boutique</a>
        </div>
    );
};

export default Brand;