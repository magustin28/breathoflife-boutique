import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../../assets/services";
import { compareById } from "../../assets/utils";
import ItemList from "./ItemList";
import CartContext from "../../context/CartContext";

const ItemListContainer = () => {
  const { amountShipping } = useContext(CartContext);
  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setisLoading(true);
    getItems(id).then((response) => {
      const products = response.sort(compareById);
      setItems(products);
      setisLoading(false);
    });
  }, [id]);

  return <ItemList products={items} isLoading={isLoading} amountShipping={amountShipping} />;
};

export default ItemListContainer;
