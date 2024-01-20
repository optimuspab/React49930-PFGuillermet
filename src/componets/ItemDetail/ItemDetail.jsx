import "./ItemDetail.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
  const [toggle, setToggle] = useState(false);
  const { addProduct } = useContext(CartContext)

  const addToCart = (counter) => {
    const newProduct = { ...product, quantity: counter }
    addProduct(newProduct)
    setToggle(true);
  };

  return (
    <div className="item-detail">
      <img className="imagen" src={product.thumbnail} alt={product.title} />
      <div className="texto">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        {
          toggle ? (
            <>
              <Link className="end-button" to="/carrito">
                Ir al carrito
              </Link>
              <Link className="end-button" to="/">
                Seguir comprando
              </Link>
            </>
          ) : (
            <ItemCount initial={1} stock={product.stock} addToCart={addToCart} />
          )
        }

      </div>
    </div>
  );
};
export default ItemDetail;
