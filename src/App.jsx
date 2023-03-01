import {useEffect, useState} from 'react'
import { IsometricContainer, Isometric, IsometricPlane, IsometricGrid,IsometricCube } from 'isometric-react'
import "nes.css/css/nes.min.css";
import axios from "axios";
import ConversionRates from "./components/ConversionRates.jsx";


function App() {
  const [currentCoinData, setCurrentCoinData] = useState(null)

    useEffect(() => {
        return () => {
            const coinData = async () => {
                try {
                    const response = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
                    setCurrentCoinData(response.data);
                } catch(e) {
                    return e.error;
                }
            }
            coinData();
        };
    }, []);


    const coinData = async () => {
      try {
          const response = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
          setCurrentCoinData(response.data);
      } catch(e) {
          return e.error;
      }
    }

  return (
      <div>
          <h1 style={{textAlign: "center", color: "white", paddingRight: "80px"}}> Welcome to the Crypto Hut </h1>
          <IsometricContainer>
          <Isometric>
            <IsometricPlane border={{ size: "30px", style: "solid",  color: "#FFF",}} color="#9E3726" width={75} height={75} position = {{elevation: 50, left: -20, top: -10}} rotate={{name: "Billboard", from:"0deg", to: "90deg"}} children={<p style={{color: "white"}}> Created by Adam Kostandy </p>} />

   <IsometricCube width={30} height={10} depth={30} color="#ffffff" border={{size: "2px", style: "solid", color: "#000000",}}
                  position={{left: 5}}
          rotate={{ name: "cubeRotateAnimation", from: "160deg", to: "160deg", delay: "0", duration: "0s"}}
        >
       <div style={{backgroundColor: "#252324"}}></div>
       <div style={{backgroundColor: "#252324"}}></div>
       <div style={{backgroundColor: "#252324"}}></div>
       <div style={{backgroundColor: "#252324"}}></div>
       <div>
           <section className="nes-container flipThis  glowScreen">
               <section className="message-list">
                   <section className="message -right">
                       <i className="nes-bcrikko"></i>
                       <div className="nes-balloon from-left">
                           <p>Hello NES.css</p>
                       </div>
                   </section>

                   <section className="message -right">
                       <div className="nes-balloon from-right">
                           <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
                       </div>
                       <i className="nes-bcrikko"></i>
                   </section>
               </section>
           </section>
       </div>
       <div style={{backgroundColor: "#252324"}}></div>
</IsometricCube>

<IsometricCube width={30} height={10} depth={30} color="#ffffff" border={{size: "2px", style: "solid", color: "#000000",}}
          position = {{ top: 24, left: -18, elevation: 0}}
          rotate={{name: "cube2", from: "110deg", to: "110deg", delay: "0", duration: "0s"}}
        >

    <div style={{backgroundColor: "#252324"}}></div>
    <div style={{backgroundColor: "#252324"}}></div>
    <div style={{backgroundColor: "#252324"}}></div>
    <div style={{backgroundColor: "#252324"}}></div>
    <div>
        <section className="nes-container flipThis  glowScreen">
            <section className="message-list">
                <section className="message -right">
                    <i className="nes-bcrikko"></i>
                    <div className="nes-balloon from-left">
                        <p>Hello NES.css</p>
                    </div>
                </section>

                <section className="message -right">
                    <div className="nes-balloon from-right">
                        <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
                    </div>
                    <i className="nes-bcrikko"></i>
                </section>
            </section>
        </section>
    </div>
    <div style={{backgroundColor: "#252324"}}></div>



</IsometricCube>


      <IsometricPlane color="#9E3726" width={20} height={5}  rotate={{name: "placedown", from: "0deg", to: "0deg", delay: "0", duration: "0s"}} position={{left: 10, top: 20}} children={<ConversionRates/>} />


      </Isometric>
    </IsometricContainer>
      </div>
  )
}

export default App
