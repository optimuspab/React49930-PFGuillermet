import { useState } from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {

    const [zoom, setZoom] = useState(false);

    const handleMouseOver = () => {
        setZoom(true);
    }

    const handleMouseLeave = () => {
        setZoom(false);
    }

    const cardStyle = {
        transform: zoom ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s ease-in-out'
    }
    
    return (
        <div style={cardStyle} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className="item">
            <img className="image" src={product.thumbnail} alt={product.title}></img>
            <p className="titulo">{product.title}</p>
            <p className="precio">{product.price}</p>
            <p>⭐{product.rating}</p>
            <Link to={`/detalle/${product.id}`} className="link">Ver detalles</Link>
        </div>
    )
}
export default Item