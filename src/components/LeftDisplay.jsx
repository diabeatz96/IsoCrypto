import React, {useState, useEffect} from 'react';
import ConversionRates from "./ConversionRates.jsx";

function LeftDisplay({coinData}) {

    const[currentTime, setCurrentTime] = useState("");


    useEffect(() => {
        return () => {
            if(!coinData) {
                console.log(coinData);
            } else {
                console.log(coinData);

                const utcTime = coinData.time.updated;
                const date = new Date(utcTime);
                setCurrentTime(date.toLocaleString());
            }
        };
    }, [coinData]);

    return (
        <div>
            <section className="flipThis glowScreen nes-container is-large is-centered">
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
                <h1 style={{textAlign: "center", }} className= "nes-text is-error"> {currentTime} </h1>
                <i className ="nes-icon instagram is-large">  </i>
                <i className ="nes-icon github is-large">  </i>
                <i className="nes-icon linkedin is-large">  </i>

            </section>

        </div>
    );
}

export default LeftDisplay;
