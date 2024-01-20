import { useContext } from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart, totalQuantity } = useContext(CartContext);

  return (
    <Link to="/carrito" className="cartwidget-container">
      <PiShoppingCartSimpleBold size={40} />
      {cart.length !== 0 && <p>{totalQuantity()}</p>}
    </Link>
  );
};

export default CartWidget;
