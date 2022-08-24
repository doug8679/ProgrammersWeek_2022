import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

// data
const product = {
  name: 'Tractor',
  variants: [
    {
      sku: 't_porsche',
      color: 'red',
      name: 'Porsche-Diesel Master 419',
      image: './images/tractor-red.jpg',
      thumb: './images/tractor-red-thumb.jpg',
      price: '66,00 €',
    },
    {
      sku: 't_fendt',
      color: 'green',
      name: 'Fendt F20 Dieselroß',
      image: './images/tractor-green.jpg',
      thumb: './images/tractor-green-thumb.jpg',
      price: '54,00 €',
    },
    {
      sku: 't_eicher',
      color: 'blue',
      name: 'Eicher Diesel 215/16',
      image: './images/tractor-blue.jpg',
      thumb: './images/tractor-blue-thumb.jpg',
      price: '58,00 €',
    },
  ],
};

const recos = {
  t_porsche: ['3', '5', '6'],
  t_fendt: ['3', '6', '4'],
  t_eicher: ['1', '8', '7'],
};

const state = {
  variant: 't_porsche',
  basket: 0,
};

const App = () => {
  
  const renderOption = (variant) => {
    const active = state.variant === variant.sku ? 'active' : '';
    return (
      <button className={active} type="button" data-sku={variant.sku}>
        <img src={variant.thumb} alt={variant.name} />
      </button>
    );
  };

  const renderReco = (id) => {
    return <img src={`./images/reco_${id}`} alt={`Reco ${id}`} />;
  };
  
  return (
    <>
      <h1 id="store">The Model Store</h1>
      <div id="basket" className={state.basket === 0 ? 'empty' : ''}>basket: {state.basket} item(s)</div>
      <div id="image"><div><img src={variant.image} alt={variant.name} /></div></div>
      <h2 id="name">{product.name} <small>{variant.name}</small></h2>
      <div id="options">{product.variants.map(renderOption)}</div>
      <button id="buy" type="button">buy for {variant.price}</button>
      <div id="reco"><h3>Related Products</h3>{reco.map(renderReco)}</div>
    </>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
