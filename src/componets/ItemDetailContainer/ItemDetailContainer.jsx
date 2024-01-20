import { useEffect, useState } from "react";
import obtenerProductos from "../utils/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProducto] = useState({})
  const { id } = useParams()

  useEffect(() => {

    obtenerProductos
      .then((respuesta) => {
        const productoEncontrado = respuesta.find((prod) => prod.id.toString() === id);
        setProducto(productoEncontrado);        
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}
export default ItemDetailContainer

