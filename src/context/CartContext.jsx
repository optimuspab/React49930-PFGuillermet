import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    const condition = productInCart(product.id);
    if (condition) {
      const modifiedProducts = cart.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + product.quantity,
          };
        } else {
          return cartProduct;
        }
      });

      setCart(modifiedProducts);
    } else {
      setCart([...cart, product]);
    }
  };

  const productInCart = (productId) => {
    return cart.some((product) => product.id === productId);
  };

  const totalQuantity = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  const totalPrice = () => {
    return cart.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
  };

  const deleteCart = () => {
    setCart([]);
  };

  const deleteProduct = (productId) => {
    const filteredProducts = cart.filter(
      (product) => product.id !== productId
    );
    setCart(filteredProducts);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        totalQuantity,
        deleteCart,
        deleteProduct,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };