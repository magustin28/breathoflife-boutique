import { Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import CartContainer from "./components/Cart/CartContainer";
import CheckoutContainer from "./components/Checkout/CheckoutContainer";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <CartProvider>
      <div className="container">
        {/* Navbar */}
        <NavbarContainer />

        <Routes>
          <Route path="/e-commerce-yoga/" element={<ItemListContainer />} />
          <Route path="/e-commerce-yoga/category/:id" element={<ItemListContainer />} />
          <Route path="/e-commerce-yoga/item/:id" element={<ItemDetailContainer />} />
          <Route path="/e-commerce-yoga/about" element={<About />} />
          <Route path="/e-commerce-yoga/contact" element={<Contact />} />
          <Route path="/e-commerce-yoga/cart" element={<CartContainer />} />
          <Route path="/e-commerce-yoga/checkout" element={<CheckoutContainer />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
