import React from "react";
import { Icon } from '@iconify/react';
import styles from "./Header.module.css";


const Header = ({ }) => {
    return (
        <div className="d-flex align-items-center gap-2">
            <Icon className={styles.icono} icon="iconoir:yoga" />
            <a className="navbar-brand" href="/">BreathOfLife Boutique</a>
        </div>
    );
};

export default Header;