import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getItems } from '../../assets/productos';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setisLoanding] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setisLoanding(true);
        getItems(id).then((response) => {
            setItems(response);
            setisLoanding(false);
        });
    }, [id]);

    return (
        <div className="">
            <ItemList products={items} isLoading={isLoading} />
        </div>
    );
};

export default ItemListContainer;