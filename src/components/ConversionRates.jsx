import React, {useEffect, useState} from 'react';
import Modal from "./Modal.jsx";

function ConversionRates({dataInfo}) {

    const [showModal, setShowModal] = useState(false);
    const [USD, setUSD] = useState(1000);
    const [GBP, setGBP] = useState(1000);
    const [EUR, setEUR] = useState(1000);
    const [BTCUSD, setBTCUSD] = useState();
    const [BTCGBP, setBTCGBP] = useState();
    const [BTCEUR, setBTCEUR] = useState();
    const [rateGroup, setRateGroup] = useState([BTCUSD, BTCGBP, BTCEUR]);



    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    useEffect(() => {
        if(dataInfo === null || dataInfo === undefined) {
            console.log(dataInfo)
        } else {
            console.log(dataInfo)
            const usdRate = dataInfo.bpi.USD.rate_float;
            const gbpRate = dataInfo.bpi.GBP.rate_float;
            const eurRate = dataInfo.bpi.EUR.rate_float;
            setBTCUSD((USD / usdRate).toFixed(4));
            setBTCGBP((GBP / gbpRate).toFixed(4));
            setBTCEUR((EUR / eurRate).toFixed(4));
        }
    }, [dataInfo])


    const setCoinHandler = (e, cointype) => {

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
            <div className="nes-container  is-centered">
                <Modal open={showModal} close={handleCloseModal}/>

                <p className="title">Conversion Rates</p>
                <button type="button" className="nes-btn is-primary">Sort Rates</button>
                <button type="button" className="nes-btn is-success">Refresh Rates</button>
                <button type="button" className="nes-btn is-warning">Coin Desk</button>
                <button type="button" className="nes-btn is-error" onClick={handleOpenModal}>Info</button>
                <div className="nes-field is-inline">
                    <label htmlFor="USD"> USD </label>
                    <input defaultValue={1000} type="number" min="1" maxLength={10} onChange={(e) => setCoinHandler(e, "USD")} id="warning_field" className="nes-input is-warning" placeholder={100}/>
                    <span className="is-warning"><i className="nes-icon coin is-small"></i></span>
                    <span className="is-primary"> {BTCUSD}</span>
                </div>

                <div className="nes-field is-inline">
                    <label htmlFor="EUR"> EUR </label>
                    <input defaultValue={1000} type="number" min="1" maxLength={10}
                           onChange={(e) => setCoinHandler(e, "EUR")} id="EUR"
                           className="nes-input is-warning" placeholder="100"/>
                    <span className="is-warning"><i className="nes-icon coin is-small"></i></span>
                    <span className="is-primary"> {BTCEUR}</span>
                </div>

                <div className="nes-field is-inline">
                    <label htmlFor="GBP"> GBP </label>
                    <input defaultValue={1000} type="number" min="1" maxLength={10}
                           onChange={(e) => setCoinHandler(e, "GBP")} id="GBP"
                           className="nes-input is-warning" placeholder="100"/>
                    <span className="is-warning"><i className="nes-icon coin is-small"></i></span>
                    <span className="is-primary"> {BTCGBP}</span>
                </div>



            </div>
        </div>
    );
}

export default ConversionRates;
