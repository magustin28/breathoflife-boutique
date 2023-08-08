import NavbarContainer from "./components/Navbar/NavbarContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <NavbarContainer />

      {/* ItemListContainer */}
      <ItemListContainer greeting="Bienvenidos a BreathOfLife Boutique" />

    </div>
  )
};

export default App