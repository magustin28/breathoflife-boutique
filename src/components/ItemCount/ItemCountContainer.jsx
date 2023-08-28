import ItemCount from "./ItemCount";
import { useState } from "react";

const ItemCountContainer = ({ stock, isInStock }) => {
    const [estado, setEstado] = useState(1)

    const incrementar = () => {
        if (estado <= stock - 1) {
            setEstado(estado + 1);
        }
    }

    const decrementar = () => {
        if (estado > 1) {
            setEstado(estado - 1);
        }
    }

    return (
        <div>
            <ItemCount estado={estado} incrementar={incrementar} decrementar={decrementar} isInStock={isInStock} />
        </div>
    );
};

export default ItemCountContainer;