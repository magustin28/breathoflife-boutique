import { useState } from "react";
import CartWignet from "./CartWidget";

const CartWidgetContainer = () => {

    const [cart, setCart] = useState(0);

    const incrementar = () => {
        setCart(cart + 1);
    }

    return (
        <CartWignet productsInCart={cart} funcion={incrementar} />
    )
}

export default CartWidgetContainer;