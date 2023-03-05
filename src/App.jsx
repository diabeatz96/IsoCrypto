import { useEffect, useState } from "react";
import {
  IsometricContainer,
  Isometric,
  IsometricPlane,
  IsometricCube,
} from "isometric-react";
import "nes.css/css/nes.min.css";
import axios from "axios";
import LeftDisplay from "./components/LeftDisplay.jsx";
import RightDisplay from "./components/RightDisplay.jsx";

function App() {
  const [currentCoinData, setCurrentCoinData] = useState(null);

  const coinData = async () => {
      try {
        const response = await axios.get(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        setCurrentCoinData(response.data);
        console.log(response.data, 2);
      } catch (e) {
        return e.error;
      }
  };

  useEffect(() => {
      console.log(coinData, 1);
      coinData();
  }, []);

  return (
    <div>
        <ul className="background">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>


      <IsometricContainer>
        <Isometric>
          <IsometricPlane
            border={{ size: "30px", style: "solid", color: "#FFF" }}
            color="#9E3726"
            width={75}
            height={75}
            position={{ elevation: 50, left: -20, top: -10 }}
            rotate={{ name: "Billboard", from: "0deg", to: "90deg" }}
            children={
              <p style={{ color: "white" }}> Created by Adam Kostandy </p>
            }
          />

          <IsometricCube
            width={30}
            height={10}
            depth={30}
            color="#ffffff"
            border={{ size: "2px", style: "solid", color: "#000000" }}
            position={{ left: 5 }}
            rotate={{
              name: "cubeRotateAnimation",
              from: "160deg",
              to: "160deg",
              delay: "0",
              duration: "0s",
            }}
          >
            <div style={{ backgroundColor: "#252324" }}></div>
            <div style={{ backgroundColor: "#252324" }}></div>
            <div style={{ backgroundColor: "#252324" }}></div>
            <div style={{ backgroundColor: "#252324" }}></div>
            <div>
              <RightDisplay dataInfo={currentCoinData} />
            </div>
            <div style={{ backgroundColor: "#252324" }}></div>
          </IsometricCube>

          <IsometricCube
            width={30}
            height={10}
            depth={30}
            color="#ffffff"
            border={{ size: "2px", style: "solid", color: "#000000" }}
            position={{ top: 24, left: -18, elevation: 0 }}
            rotate={{
              name: "cube2",
              from: "110deg",
              to: "110deg",
              delay: "0",
              duration: "0s",
            }}
          >
            <div style={{ backgroundColor: "#252324" }}></div>
            <div style={{ backgroundColor: "#252324" }}></div>
            <div style={{ backgroundColor: "#252324" }}></div>
            <div style={{ backgroundColor: "#252324" }}></div>
            <div>
              <LeftDisplay coinData={currentCoinData} />
            </div>
            <div style={{ backgroundColor: "#252324" }}></div>
          </IsometricCube>

          <IsometricPlane
            color="#9E3726"
            width={25}
            height={5}
            rotate={{
              name: "placedown",
              from: "0deg",
              to: "0deg",
              delay: "0",
              duration: "0s",
            }}
            position={{ left: 25, top: 30 }}
            children={
              <>
                <i style={{ scale: "500%" }} className="nes-pokeball"></i>
              </>
            }
          />
        </Isometric>
      </IsometricContainer>
    </div>
  );
}

export default App;
