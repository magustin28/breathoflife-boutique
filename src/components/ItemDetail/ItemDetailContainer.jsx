import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getItem } from "../../assets/services";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [stock, setStock] = useState(0);
  const [isInStock, setisInStock] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getItem(id)
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
        setisLoading(false);
      });
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return <ItemDetail item={item} isLoading={isLoading} stock={stock} isInStock={isInStock} botonVolver={handleGoBack} />;
};

export default ItemDetailContainer;
