import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import getProducts from "../utils/asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoria } = useParams();

    useEffect(() => {
        setLoading(true);

        getProducts
            .then((respuesta) => {
                if (categoria) {
                    const filteredProducts = respuesta.filter(
                        (product) => product.category === categoria
                    );
                    setProducts(filteredProducts);
                } else {
                    setProducts(respuesta);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoria]);

    return (
        <div>
            <h1>{greeting}</h1>
            {loading ? (
                <div className="spinner-container">
                    <PulseLoader color="darkgrey" />
                </div>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};

export default ItemListContainer;
