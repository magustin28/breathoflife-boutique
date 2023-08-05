import React from "react";
import Header from "../Header/Header";


const Navbar = ({ title }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary {styles.navbar}">
            <div className="d-flex justify-content-between w-100 mx-5">
                <Header />
                <div className="">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {title.map((elementos) => (
                            <li key={elementos.id} className="nav-item mx-2">
                                <a className="nav-link" href="#">{elementos.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;