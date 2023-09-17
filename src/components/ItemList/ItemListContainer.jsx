import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../../assets/services";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setisLoading(true);
    getItems(id).then((response) => {
      setItems(response);
      setisLoading(false);
    });
  }, [id]);

  return (
    <div className="">
      <ItemList products={items} isLoading={isLoading} />
    </div>
  );
};

export default ItemListContainer;
