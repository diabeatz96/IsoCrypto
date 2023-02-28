import { useState } from 'react'
import { IsometricContainer, Isometric, IsometricPlane, IsometricGrid,IsometricCube } from 'isometric-react'
import "nes.css/css/nes.min.css";


function App() {
  const [count, setCount] = useState(0)

  return (
  <IsometricContainer>
      <Isometric>



<IsometricPlane border={{ size: "30px", style: "solid",  color: "#FFF",}} color="#9E3726" width={75} height={75} position = {{elevation: 50, left: -20, top: -10}} rotate={{name: "Billboard", from:"0deg", to: "90deg"}} children={<p style={{color: "white"}}> Created by Adam Kostandy </p>} />

   <IsometricCube width={30} height={10} depth={30} color="#ffffff"
          border={{
            size: "2px",
            style: "solid",
            color: "#000000",
          }}
          rotate={{
            name: "cubeRotateAnimation",
            from: "180deg",
            to: "180deg",
            delay: "0",
            duration: "0s"
          }}
        >
          {[...Array(6)].map((_, sideIndex) => (
            <div key={sideIndex}>Side: {sideIndex}</div>
          ))}

</IsometricCube>

<IsometricCube width={30} height={10} depth={30} color="#ffffff"
          border={{
            size: "2px",
            style: "solid",
            color: "#000000",
          }}
          position = {{ top: 20, left: -20, elevation: 0}}
          rotate={{
            name: "cube2",
            from: "90deg",
            to: "90deg",
            delay: "0",
            duration: "0s"
          }}
        >
          {[...Array(6)].map((_, sideIndex) => (
            <div key={sideIndex}>
              <section className="nes-container">
  <section className="message-list">
    <section className="message -left">
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
          ))}

</IsometricCube>

      
      <IsometricPlane color="#000" width={5} height={5} />


      </Isometric>
    </IsometricContainer>
  )
}

export default App
