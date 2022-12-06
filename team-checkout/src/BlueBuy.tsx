import React from 'react';

const prices = {
    t_porsche: '66,00 €',
    t_fendt: '54,00 €',
    t_eicher: '58,00 €',
};

const BlueBuy = (props) => {
    const { sku } = props;
    const price = prices[sku];
    return <button id="buy" type="button">buy for {price}</button>;
};

export default BlueBuy;