import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [productExists, setProductExists] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const productRef = doc(db, "products", id);
    getDoc(productRef).then((respuesta) => {
      const productoDb = { id: respuesta.id, ...respuesta.data() };

      if (!respuesta.exists()) {
        setProductExists(true);
      }
      setProduct(productoDb);
    });

  }, [id])

  return (
    <div>
      {productExists ? (
        <div>El producto no existe 😵</div>
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};
export default ItemDetailContainer

