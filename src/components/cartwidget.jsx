import React, { useState } from 'react';
import '../app.css';

function CartWidget() {


    const [cartCount, setCartCount] = useState(0);

    return (
        <div className="cart-icon">
            🛒 <span className="cart-counter">{cartCount}</span>
        </div>
    )

}

export default CartWidget;