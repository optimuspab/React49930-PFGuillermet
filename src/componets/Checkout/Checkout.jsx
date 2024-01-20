import { useContext, useState } from "react";
import Form from "./Form";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db";
import { Link } from "react-router-dom";
import "./Checkout.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    emailRepetido: ""
  });

  const [orderId, setOrderId] = useState(null);
  const { cart, totalPrice, deleteCart } = useContext(CartContext);

  const saveInputData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const sendOrder = (event) => {
    event.preventDefault();

    const notifyEmptyCart = () => toast.error("El carrito está vacío. Agregue productos antes de realizar la compra.");

    if (cart.length === 0) {
      notifyEmptyCart();
      return; // No permite que el formulario se envíe si el carrito está vacío
    }

    if (formData.email === formData.emailRepetido) {
      const order = {
        comprador: { ...formData },
        productos: [...cart],
        fecha: new Date(),
        total: totalPrice(),
      };

      submitOrder(order);
    } else {
      toast.error("La dirección de email debe coincidir");
    }
  };

  const submitOrder = (order) => {
    const orderRef = collection(db, "orders");
    addDoc(orderRef, order).then((respuesta) => {
      setOrderId(respuesta.id)
      deleteCart()
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="checkout">
        {orderId ? (
          <div className="orden">
            <h2>Orden Generada correctamente, seguí tu pedido por email.</h2>
            <p>N° de orden: {orderId} </p>
            <Link className="boton-orden" to="/">Ver mas productos</Link>
          </div>
        ) : (
          <Form
            formData={formData}
            saveInputData={saveInputData}
            sendOrder={sendOrder}
          />
        )}
      </div>
    </>
  );
};
export default Checkout;
