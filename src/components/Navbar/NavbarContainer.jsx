import Navbar from "./NavBar";
import { useEffect, useState } from "react";
import { getNavbarElements } from "../../assets/services";

const NavbarContainer = () => {
  const [navbarElements, setNavbarElements] = useState([]);

  useEffect(() => {
    getNavbarElements().then((response) => {
      setNavbarElements(response);
    });
  }, []);

  return (
    <>
      <Navbar title={navbarElements} />
    </>
  );
};

export default NavbarContainer;
