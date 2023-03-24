/* eslint-disable react/no-children-prop */
import { IsometricPlane } from 'isometric-react'

const Modal = ({ open, close, children }) => {
  const handleClose = () => {
    close()
  }

  return open
    ? (
    <IsometricPlane
      className="flipThis"
      width={20}
      color={'white'}
      height={20}
      position={{ top: -20, left: 0, elevation: -40 }}
      children={<div> Hello </div>}
    >
      <div className="nes-container with-title is-centered">
        <p className="title">Info Box</p>
        <p>
          Hi! This website was created by Adam Kostandy, Enjoy your crypto!
          Created with React, NES.CSS, IsometricReact
        </p>
        <button className="nes-btn" onClick={handleClose}>
          Close Box
        </button>
      </div>
    </IsometricPlane>
      )
    : null
}

export default Modal
