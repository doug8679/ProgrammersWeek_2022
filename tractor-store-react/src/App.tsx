import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Basket from "./Basket";

import "./index.css";

// data
const product = {
  name: 'Tractor',
  variants: [
    {
      sku: 't_porsche',
      color: 'red',
      name: 'Porsche-Diesel Master 419',
      image: 'tractor-red.jpg',
      thumb: 'tractor-red-thumb.jpg',
      price: '66,00 €',
    },
    {
      sku: 't_fendt',
      color: 'green',
      name: 'Fendt F20 Dieselroß',
      image: 'tractor-green.jpg',
      thumb: 'tractor-green-thumb.jpg',
      price: '54,00 €',
    },
    {
      sku: 't_eicher',
      color: 'blue',
      name: 'Eicher Diesel 215/16',
      image: 'tractor-blue.jpg',
      thumb: 'tractor-blue-thumb.jpg',
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
  basket: 0
};

const App = () => {

  const [myState, setAppState] = useState(state);

  const handleClickBuy = React.useCallback(() => {
    setAppState({...myState, basket: myState.basket+1});
  }, []);

  const handleClickOption = React.useCallback((e) => {
    const sku = e.currentTarget.getAttribute('data-sku');
    setAppState({...myState, variant: sku});
  }, []);
  
  const renderOption = (variant) => {
    const active = myState.variant === variant.sku ? 'active' : '';
    return (
      <button key={variant.sku} className={active} type="button" data-sku={variant.sku} onClick={handleClickOption}>
        <img src={variant.thumb} alt={variant.name} />
      </button>
    );
  };

  const renderReco = (id) => {
    return <img key={id} src={`reco_${id}.jpg`} alt={`Reco ${id}`} />;
  };

  const variant = product.variants.find((v) => myState.variant === v.sku);
  const reco = recos[variant.sku];
  
  return (
    <>
      <h1 id="store">The Model Store</h1>
      <Basket count={myState.basket}></Basket>
      <div id="image"><div><img src={variant.image} alt={variant.name} /></div></div>
      <h2 id="name">{product.name} <small>{variant.name}</small></h2>
      <div id="options">{product.variants.map(renderOption)}</div>
      <button id="buy" type="button" onClick={handleClickBuy}>buy for {variant.price}</button>
      <div id="reco"><h3>Related Products</h3>{reco.map(renderReco)}</div>
    </>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
