import React from 'react';

function ConversionRates(props) {
    return (
        <div>
            <div className="nes-container is-dark is-centered">
                <p className="title">Conversion Rates</p>
                <button type="button" className="nes-btn is-primary">Sort Rates</button>
                <button type="button" className="nes-btn is-success">Success</button>
                <button type="button" className="nes-btn is-warning">Warning</button>
                <button type="button" className="nes-btn is-error">Error</button>
            </div>
        </div>
    );
}

export default ConversionRates;
