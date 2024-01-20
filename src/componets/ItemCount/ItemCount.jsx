import './ItemCount.css'
import React, { useState } from 'react';

const ItemCount = ({ stock, initial, addToCart }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='counter'>
            <div className='controls'>
                <button className='controls-button' onClick={decrement}>-</button>
                <h4 className='number'>{quantity}</h4>
                <button className='controls-button' onClick={increment}>+</button>
            </div>
            <button className="endPurchase" onClick={ () => addToCart(quantity) } >
                Terminar Compra
            </button>
        </div>
    )
}

export default ItemCount

