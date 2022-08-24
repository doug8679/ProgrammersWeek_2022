import React from 'react';

const Recommendations = ({recos}) => {
    const renderReco = (id) => {
        return <img key={id} src={`reco_${id}.jpg`} alt={`Reco ${id}`} />;
    };

    return (
        <div id="reco">
            <h3>Related Products</h3>
            {recos.map(renderReco)}
        </div>
    );
};

export default Recommendations;