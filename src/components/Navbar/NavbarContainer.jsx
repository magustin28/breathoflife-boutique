import React from "react";
import Navbar from "./Navbar";

const ElementosNavbar = [
    { id: 1, title: "Nosotros" },
    { id: 2, title: "Productos" },
    { id: 3, title: "Contacto" },
    { id: 4, title: "Iniciar Sesión" },
    { id: 5, title: "Registrarse" }
]


const NavbarContainer = () =>{
    return(
        <div>
            <Navbar title={ElementosNavbar}/>
        </div>
    )
};

export default NavbarContainer;