import React from 'react';

const BuyButton = ({addToCart, price}) =>
    <button id="buy" type="button" onClick={addToCart}>buy for {price}</button>;

export default BuyButton;