import React, { useEffect, useState } from 'react'
import ConversionRates from './ConversionRates.jsx'

function RightDisplay ({ dataInfo }) {
  const [passInfo, setpassInfo] = useState(null)

  useEffect(() => {
    if (dataInfo === null) {
      console.log(dataInfo)
    } else {
      console.log(dataInfo)
      setpassInfo(dataInfo)
    }
  }, [dataInfo])
  return (
    <div>
      <section className="nes-container is-centered flipThis glowScreen">
        <section>
          <ConversionRates dataInfo={passInfo} />
        </section>
      </section>
    </div>
  )
}

export default RightDisplay
