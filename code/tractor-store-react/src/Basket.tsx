import React from 'react';

const Basket = ({count}) => <div id="basket" className={count === 0 ? 'empty' : ''}>basket: {count} item(s)</div>;

export default Basket;