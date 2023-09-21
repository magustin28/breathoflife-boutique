import Navbar from "./NavBar";
import { useEffect, useState } from "react";
import { getCollectionData } from "../../assets/services";

const NavbarContainer = () => {
  const [navbarElements, setNavbarElements] = useState([]);

  useEffect(() => {
    getCollectionData("navbarElements").then((response) => {
      setNavbarElements(response);
    });
  }, []);

  return <Navbar title={navbarElements} />;
};

export default NavbarContainer;
