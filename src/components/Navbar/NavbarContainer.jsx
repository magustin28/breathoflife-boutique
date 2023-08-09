import Navbar from "./NavBar";

const ElementosNavbar = [
    { id: 1, title: "Nosotros" },
    { id: 2, title: "Categorias"},
    { id: 3, title: "Productos" },
    { id: 4, title: "Contacto" },
    { id: 5, title: "Iniciar Sesión" },
    { id: 6, title: "Registrarse" }
]

const NavbarContainer = () =>{
    return(
        <>
            <Navbar title={ElementosNavbar}/>
        </>
    )
};

export default NavbarContainer;