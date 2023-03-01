import React, { useState } from 'react';

function RightDisplay({dataInfo}) {
    const [USD, getUSD] = useState(null);
    const [GDP, setGDP] = useState(null); 
    
    return (
        <div>
        <section className="nes-container is-centered flipThis glowScreen">
            <section>
            <div style={{fontSize: "2rem"}} class="nes-text is-primary">CRYPTO EXCHANGE </div>

            <i class="nes-icon coin is-large"></i>
            <i class="nes-icon coin is-large"></i>
            <i class="nes-icon coin is-large"></i>
            <i class="nes-icon coin is-large"></i>
            <i class="nes-icon coin is-large"></i>

            <div> </div>

                <section>
                <i class="nes-squirtle"></i>
                    <i class="nes-bulbasaur"></i>
                <i class="nes-charmander"></i>
                </section>
            

            </section>
        </section>
        </div>
    );
}

export default RightDisplay;
