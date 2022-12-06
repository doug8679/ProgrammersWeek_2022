import React from 'react';

const BlueBasket = (props) => {
    let { count } = props;
    if (!count) {
        count = 0;
    }
    const classname = count === 0 ? 'empty' : 'filled';

    return <div id="basket" className={classname}>basket: {count} item(s)</div>;
};
  
  export default BlueBasket;