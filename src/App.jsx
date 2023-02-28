import { useState } from 'react'
import { IsometricContainer, Isometric, IsometricPlane, IsometricGrid,IsometricCube } from 'isometric-react'
import "nes.css/css/nes.min.css";


function App() {
  const [count, setCount] = useState(0)

  return (
  <IsometricContainer>
      <Isometric>
      <IsometricGrid
          size={10}
          sizeMultiplier={{
            width: 3,
            height: 5,
          }}
          color="red"
          lineweight={2}

          rotate={{
            name: "cubeRotateAnimation",
            from: "0deg",
            to: "360deg",
            delay: "0",
            duration: "30s"
          }}

        />
   <IsometricCube
          width={20}
          height={40}
          depth={5}
          color="rgb(255, 255, 255)"
          border={{
            size: "2px",
            style: "solid",
            color: "#000000",
          }}
        >
        <div>
          <div className="nes-container with-title is-centered">
             <p className="title">Container.is-centered</p>
             <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
          </div>
        </div>

        <div>
        
        </div>


        <div>
        <div class="nes-container is-dark with-title">
  <p class="title">Container.is-dark</p>
  <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
</div>
        </div>
</IsometricCube>

      <IsometricPlane color="#000" width={5} height={5} />

      </Isometric>
    </IsometricContainer>
  )
}

export default App
