import './App.css';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa Routes y Route
import Carrito from './componets/Carrito/Carrito';
import { CartProvider } from "./context/CartContext";
import Checkout from "./componets/Checkout/Checkout";
import Error404 from './componets/Error/Error';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenido a Trendy Tech!'} />} />
          <Route path="/categorias/:categoria" element={<ItemListContainer greeting={'Bienvenido a Trendy Tech!'} />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;