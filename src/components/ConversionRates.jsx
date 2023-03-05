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
  const [timeLeft, setTimeLeft] = useState(300);
  const [showOptions, setShowOptions] = useState([true, false, false]);
  const [rateGroup, setRateGroup] = useState([]);

  const [selectedItem, setSelectedItem] = useState(
    <CurrencySelection
      currencyName={"USD"}
      coinHandler={(e) => setCoinHandler(e, "USD")}
      btcType={BTCUSD}
    />
  );

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
        localStorage.removeItem(expirationTime);
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
      console.log("TRIGGERED");
      const usdRate = localStorage.getItem("USA");
      const gbpRate = localStorage.getItem("EUR");
      const eurRate = localStorage.getItem("GBP");

      setBTCUSD((USD / usdRate).toFixed(4));
      setBTCGBP((GBP / gbpRate).toFixed(4));
      setBTCEUR((EUR / eurRate).toFixed(4));

      const dollarBTCUSD = (1 / usdRate).toFixed(8)
      const dollarBTCGBP = (1 / gbpRate).toFixed(8)
      const dollarBTCEUR = (1 / eurRate).toFixed(8)

      setRateGroup([{
        name: "USD $",
        value: dollarBTCUSD
      }, {
        name: "EUR €",
        value: dollarBTCEUR
      }, {
        name: "GBP (£)",
        value: dollarBTCGBP
      }]);

    }
  }, [dataInfo]);

  {
    /**
        ASYNC HANDLER:
        UTILIZIE COMPONENT.
        JOB SECURITY FOR A PROGRAMMER.

    */
  }

  const sortRates = () => {

  }
  const setCoinHandler = (e, cointype) => {
    const usdRate = dataInfo.bpi.USD.rate_float;
    const gbpRate = dataInfo.bpi.GBP.rate_float;
    const eurRate = dataInfo.bpi.EUR.rate_float;
    console.log("Value at coin Handler" + e.target.value);
    const typedValue = parseFloat(e.target.value);
    switch (cointype) {
      case "USD":
        setBTCUSD((typedValue / usdRate).toFixed(4));
        break;
      case "EUR":
        setBTCEUR((typedValue / eurRate).toFixed(4));
        break;
      case "GBP":
        setBTCGBP((typedValue / gbpRate).toFixed(4));
        break;
      default:
        e.target.value = "Does not exist";
    }
  };
  const selectHandler = (e) => {
    console.log(e.target.value);
    switch (e.target.value) {
      case "USD":
        setShowOptions([true, false, false]);
        break;
      case "EUR":
        setShowOptions([false, true, false]);
        break;
      case "GBP":
        setShowOptions([false, false, true]);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="  is-centered">
        <Modal open={showModal} close={handleCloseModal} />

        <p className="title">Conversion Rates</p>
        <button type="button" className="nes-btn is-primary">
          Sort Rates
        </button>
        <button type="button" className="nes-btn is-success">
          Refresh Rates
        </button>
        <button type="button" onClick={()=> window.open("https://www.coindesk.com/", "_blank")} className="nes-btn is-warning">
          Coin Desk
        </button>
        <button
          type="button"
          className="nes-btn is-error"
          onClick={handleOpenModal}
        >
          Info
        </button>
        <div className="nes-table-responsive">
          <table className="nes-table is-bordered is-centered">
            <thead>
            </thead>
            <tbody>
            {rateGroup.map((item) => {
              return <tr>
                <td> {item.name}: 1</td>
                <td> ₿ {item.value}  </td>
              </tr>
            })}
            </tbody>
          </table>
        </div>

        <div>
          <label htmlFor="options">Select an option:</label>
          <select
            onChange={(e) => {
              selectHandler(e);
            }}
          >
            <option value="USD"> USA </option>
            <option value="EUR"> EUR </option>
            <option value="GBP"> GBP </option>
          </select>

          {showOptions[0] && (
            <CurrencySelection
              currencyName={"USD"}
              coinHandler={(e) => setCoinHandler(e, "USD")}
              btcType={BTCUSD}
            />
          )}

          {showOptions[1] && (
            <CurrencySelection
              currencyName={"EUR"}
              coinHandler={(e) => setCoinHandler(e, "EUR")}
              btcType={BTCEUR}
            />
          )}

          {showOptions[2] && (
            <CurrencySelection
              currencyName={"GBP"}
              coinHandler={(e) => setCoinHandler(e, "GBP")}
              btcType={BTCGBP}
            />
          )}

        </div>
      </div>
    </div>
  );
}

export default ConversionRates;
