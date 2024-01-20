import "./Carrito.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";

const Carrito = () => {
  const { cart, deleteCart, deleteProduct, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Ooops el carrito esta vacio 😵</h2>
        <Link className="button" to="/">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <ul className="list">
        {cart.map((product) => (
          <li className="product" key={product.id}>
            <img
              className="image"
              src={product.thumbnail}
              alt={product.title}
            />
            <p className="text name">{product.title}</p>
            <p className="text">cantidad: {product.quantity}</p>
            <p className="text">precio c/u: ${product.price}</p>
            <FaTrashCan
              className="delete"
              onClick={() => deleteProduct(product.id)}
              size={25}
            />
          </li>
        ))}
      </ul>
      <h3>Total a pagar: ${totalPrice()}</h3>
      <div className="delete-cart-button" onClick={deleteCart}>
        <p>Vaciar carrito</p>
        <FaTrashCan size={25} />
      </div>
      <Link className="continue-button" to="/checkout">
        <p>Continuar con la compra</p>
      </Link>
    </div>
  );
};
export default Carrito;