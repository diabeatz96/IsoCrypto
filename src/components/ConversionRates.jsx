import React, { useEffect, useState } from "react";
import Modal from "./Modal.jsx";
import CurrencySelection from "./CurrencySelection.jsx";

/**
 * This component compartmentalizes all of the logic for Conversion Rates and displays them
 * : FUTURE: SHIFT STATE OVER TO USEREDUCER
 * @param {string} dataInfo - Passed down component of dataInfo from Coindesk API
 * @returns {ConversionRates}
 */

function ConversionRates({ dataInfo }) {
  const [showModal, setShowModal] = useState(false);
  const [USD, setUSD] = useState(1000);
  const [GBP, setGBP] = useState(1000);
  const [EUR, setEUR] = useState(1000);
  const [BTCUSD, setBTCUSD] = useState();
  const [BTCGBP, setBTCGBP] = useState();
  const [BTCEUR, setBTCEUR] = useState();
  const [dollarBTCUSD, setDollarBTCUSD] = useState(1);
  const [dollarBTCEUR, setDollarBTCEUR] = useState(1);
  const [dollarBTCGBP, setDollarBTCGBP] = useState(1);
  const [timeLeft, setTimeLeft] = useState(300);

  const [rateGroup, setRateGroup] = useState([
    {
      element: (
        <CurrencySelection
          currencyName={"USD"}
          coinHandler={(e) => setCoinHandler(e, "USD")}
          btcType={BTCUSD}
        />
      ),
      btcValue: dollarBTCUSD,
    },
    {
      element: (
        <CurrencySelection
          currencyName={"EUR"}
          coinHandler={(e) => setCoinHandler(e, "EUR")}
          btcType={BTCEUR}
        />
      ),
      btcValue: dollarBTCEUR,
    },
    {
      element: (
        <CurrencySelection
          currencyName={"GBP"}
          coinHandler={(e) => setCoinHandler(e, "GBP")}
          btcType={BTCGBP}
        />
      ),
      btcValue: dollarBTCGBP,
    },
  ]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (!localStorage.getItem("expirationTime")) {
      localStorage.setItem("expirationTime", timeLeft);
    }

    const intervalId = setInterval(() => {
      const expirationTime = localStorage.getItem("expirationTime");

      if (expirationTime === "0") {
        clearInterval(intervalId);
        return;
      }

      setTimeLeft(parseInt(expirationTime) - 1);
      localStorage.setItem("expirationTime", parseInt(expirationTime) - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  {
    /*
        This useEffect hook updates the component state with the latest Bitcoin exchange rates from the CoinDesk API.
        If `dataInfo` is null or undefined, the hook logs the value to the console.
        Otherwise, the hook extracts the USD, GBP, and EUR exchange rates from the `dataInfo` object and uses them to calculate the corresponding BTC exchange rates.
        The BTC exchange rates and their USD equivalents are then stored in the component state using the `setBTCUSD`, `setBTCGBP`, `setBTCEUR`, `setDollarBTCUSD`, `setDollarBTCEUR`, and `setDollarBTCGBP` functions.
    */
  }

  useEffect(() => {});

  useEffect(() => {
    if (dataInfo === null || dataInfo === undefined) {
      console.log(dataInfo);
    } else {
      console.log(dataInfo);
      if (
        !localStorage.getItem("GBP") ||
        !localStorage.getItem("EUR") ||
        !localStorage.getItem("GBP")
      ) {
        const usdRate = dataInfo.bpi.USD.rate_float;
        const gbpRate = dataInfo.bpi.GBP.rate_float;
        const eurRate = dataInfo.bpi.EUR.rate_float;

        localStorage.setItem("USA", usdRate);
        localStorage.setItem("GBP", gbpRate);
        localStorage.setItem("EUR", eurRate);
      }
      const usdRate = localStorage.getItem("GBP");
      const gbpRate = localStorage.getItem("EUR");
      const eurRate = localStorage.getItem("GBP");
      setBTCUSD((USD / usdRate).toFixed(4));
      setBTCGBP((GBP / gbpRate).toFixed(4));
      setBTCEUR((EUR / eurRate).toFixed(4));
      setDollarBTCUSD((1 / usdRate).toFixed(8));
      setDollarBTCEUR((1 / gbpRate).toFixed(8));
      setDollarBTCGBP((1 / gbpRate).toFixed(8));
    }
  }, [dataInfo]);

  const selectHandler = (e) => {
    return <div> HIIII </div>;
  };
  const setCoinHandler = (e, cointype) => {
    const usdRate = dataInfo.bpi.USD.rate_float;
    const gbpRate = dataInfo.bpi.GBP.rate_float;
    const eurRate = dataInfo.bpi.EUR.rate_float;
    switch (cointype) {
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
        e.target.value = "Does not exist";
    }
  };

  return (
    <div>
      <div className="nes-container  is-centered">
        <Modal open={showModal} close={handleCloseModal} />

        <p className="title">Conversion Rates</p>
        <button type="button" className="nes-btn is-primary">
          Sort Rates
        </button>
        <button type="button" className="nes-btn is-success">
          Refresh Rates
        </button>
        <button type="button" className="nes-btn is-warning">
          Coin Desk
        </button>
        <button
          type="button"
          className="nes-btn is-error"
          onClick={handleOpenModal}
        >
          Info
        </button>

        <select
          onSelect={(e) => {
            selectHandler;
          }}
        >
          <option value="0">Option 1</option>
          <option value="1">Option 2</option>
          <option value="2">Option 3</option>
        </select>

        <CurrencySelection
          currencyName={"USD"}
          coinHandler={(e) => setCoinHandler(e, "USD")}
          btcType={BTCUSD}
        />
        <CurrencySelection
          currencyName={"EUR"}
          coinHandler={(e) => setCoinHandler(e, "EUR")}
          btcType={BTCEUR}
        />
        <CurrencySelection
          currencyName={"GBP"}
          coinHandler={(e) => setCoinHandler(e, "GBP")}
          btcType={BTCGBP}
        />
      </div>
    </div>
  );
}

export default ConversionRates;
