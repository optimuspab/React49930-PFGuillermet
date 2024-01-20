import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoria } = useParams();

    useEffect(() => {
        setLoading(true);

        let consulta
        const productsRef = collection(db, "products");
    
        if(categoria){
          consulta = query(productsRef, where("category", "==", categoria))
        }else{
          consulta = productsRef
        }
    
        getDocs(consulta)
          .then((respuesta) => {
          let productsDb = respuesta.docs.map((product) => {
            return { id: product.id, ...product.data() };
          });
          setProducts(productsDb)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))

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
