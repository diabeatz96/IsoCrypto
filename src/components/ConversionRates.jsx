import React, {useEffect, useState} from 'react';
import Modal from "./Modal.jsx";
import CurrencySelection from "./CurrencySelection.jsx";

function ConversionRates({dataInfo}) {

    const [showModal, setShowModal] = useState(false);
    const [USD, setUSD] = useState(1000);
    const [GBP, setGBP] = useState(1000);
    const [EUR, setEUR] = useState(1000);
    const [BTCUSD, setBTCUSD] = useState();
    const [BTCGBP, setBTCGBP] = useState();
    const [BTCEUR, setBTCEUR] = useState();
    const [rateGroup, setRateGroup] = useState([{
        element: <CurrencySelection currencyName={"USD"} coinHandler={(e) => setCoinHandler(e, "USD")} btcType={BTCUSD}/>,
        btcValue: BTCUSD
    }, {

    }, {

    }]);



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

    const selectHandler = (e) => {
        return <div> HIIII </div>
    }
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

                <select onSelect={(e) => {selectHandqler} }>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>

                <CurrencySelection currencyName={"USD"} coinHandler={(e) => setCoinHandler(e, "USD")} btcType={BTCUSD}/>
                <CurrencySelection currencyName={"EUR"} coinHandler={(e) => setCoinHandler(e, "EUR")} btcType={BTCEUR}/>
                <CurrencySelection currencyName={"GBP"} coinHandler={(e) => setCoinHandler(e, "GBP")} btcType={BTCGBP}/>



            </div>
        </div>
    );
}

export default ConversionRates;
