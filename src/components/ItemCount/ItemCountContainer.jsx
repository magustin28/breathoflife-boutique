import ItemCount from "./ItemCount";
import { useState } from "react";

const ItemCountContainer = ({ stock, isInStock }) => {
    const [cantidad, setCantidad] = useState(1)

    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    }

    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

    return (
        <div>
            <ItemCount initial={cantidad} incrementar={incrementar} decrementar={decrementar} isInStock={isInStock} />
        </div>
    );
};

export default ItemCountContainer;