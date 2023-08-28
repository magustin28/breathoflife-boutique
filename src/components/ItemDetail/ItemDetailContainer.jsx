import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { obtenerProducto } from '../../assets/productos';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [isLoading, setisLoanding] = useState(true);
    const [stock, setStock] = useState(0);
    const [isInStock, setisInStock] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        obtenerProducto(id)
            .then((response) => {
                setItem(response);
                setStock(parseInt(response.stock));
                if (response.stock === 0) {
                    setisInStock(false);
                }
            })
            .catch(() => {
                setItem(null);
            })
            .finally(() => {
                setisLoanding(false);
            })
    }, [id]);

    return (
        <ItemDetail item={item} isLoading={isLoading} stock={stock} isInStock={isInStock} />
    );
};

export default ItemDetailContainer;