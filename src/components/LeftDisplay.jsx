import React, { useState, useEffect } from "react";

function LeftDisplay({ coinData }) {
  const [currentTime, setCurrentTime] = useState("");


  const createTime = () => {
    if (!coinData) {
      console.log(coinData);
    } else {
      console.log(coinData);
      const utcTime = coinData.time.updated;
      const date = new Date(utcTime);
      setCurrentTime(date.toLocaleString());
    }
  }
  useEffect(() => {
      createTime();
  }, [coinData]);

  return (
    <div>
      <section className="flipThis glowScreen nes-container is-large is-centered">
        <div style={{ fontSize: "2rem" }} className="nes-text is-primary">
          {" "}
          CRYPTO EXCHANGE{" "}
        </div>

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
        <h1 style={{ textAlign: "center" }} className="nes-text is-error">
          {" "}
          {currentTime}{" "}
        </h1>
        <i onClick={()=> window.open("https://www.instagram.com/diabeatz96/?hl=en", "_blank")} className="nes-icon instagram is-large nes-pointer"> </i>
        <i onClick={()=> window.open("https://github.com/diabeatz96", "_blank")} className="nes-icon github is-large nes-pointer"> </i>
        <i onClick={()=> window.open("https://www.linkedin.com/in/adamkostandy/", "_blank")} className="nes-icon linkedin is-large nes-pointer"> </i>
      </section>
    </div>
  );
}

export default LeftDisplay;
