import React, { useEffect, useState } from 'react';

function RightDisplay({dataInfo}) {

    const [USD, setUSD] = useState(1);
    const [GBP, setGBP] = useState(1); 
    const [EUR, setEUR] = useState(1);
    const [BTCUSD, setBTCUSD] = useState();
    const [BTCGBP, setBTCGBP] = useState();
    const [BTCEUR, setBTCEUR] = useState();

    useEffect(() => {
        if(dataInfo === null) {
            console.log(dataInfo)
        } else {
            const usdRate = dataInfo.bpi.USD.rate_float;
            const gbpRate = dataInfo.bpi.GBP.rate_float;
            const eurRate = dataInfo.bpi.EUR.rate_float;
            setBTCUSD((USD / usdRate).toFixed(4));
            setBTCGBP((GBP / gbpRate).toFixed(4));
            setBTCEUR((EUR / eurRate).toFixed(4));
        } 
    }, [dataInfo])

    const setCoinHandler = (e, cointype) => {
        console.log(parseFloat(e.target.value));
    
        const usdRate = dataInfo.bpi.USD.rate_float;
        const gbpRate = dataInfo.bpi.GBP.rate_float;
        const eurRate = dataInfo.bpi.EUR.rate_float;
            switch(cointype) {
                case "USD":
                    setUSD(parseFloat(e.target.value));
                    setBTCUSD((USD / usdRate).toFixed(4));
                    break;
                case "EUR":
                    setEUR(parseFloat(e.target.value));
                    setBTCEUR((EUR / eurRate).toFixed(4));
                    break;
                case "GBP":
                    setGBP(parseFloat(e.target.value));
                    setBTCGBP((GBP / gbpRate).toFixed(4));
                    break;
                default:
                    e.target.value = "Does not exist"
            }
    }
    return (
        <div>
        <section className="nes-container is-centered flipThis glowScreen">
            <section>
            <div style={{fontSize: "2rem"}} className="nes-text is-primary"> CRYPTO EXCHANGE </div>

            <i className="nes-icon coin is-large"></i>
            <i className="nes-icon coin is-large"></i>
            <i className="nes-icon coin is-large"></i>
            <i className="nes-icon coin is-large"></i>
            <i className="nes-icon coin is-large"></i>

            <div> </div>

                <section>
                <i className="nes-squirtle"></i>
                    <i className="nes-bulbasaur"></i>
                <i className="nes-charmander"></i>
                </section>
            
                <div className="nes-field is-inline">
                <label htmlFor="warning_field"> USD </label>
                <input type="number" min="1" maxLength={10} onChange={(e) => setCoinHandler(e, "USD")} id="warning_field" className="nes-input is-warning" placeholder={100}/>
                <span className="is-warning"><i class="nes-icon coin is-small"></i></span>
                <span className="is-primary"> {BTCUSD}</span>
                </div>

            </section>
        </section>
        </div>
    );
}

export default RightDisplay;
