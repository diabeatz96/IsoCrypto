import { IsometricPlane } from 'isometric-react';

const WarningModal = ({ open, close, remainingTime }) => {
  const handleClose = () => {
    close();
  };

  return open ? (
    <IsometricPlane
      className='flipThis'
      width={20}
      color={'white'}
      height={17}
      position={{ top: -20, left: 0, elevation: -40 }}
      // eslint-disable-next-line react/no-children-prop
      children={<div> Hello </div>}
    >
      <div className='nes-container with-title is-centered'>
        <p className='title'>Info Box</p>
        {remainingTime <= 0 ? (
          <p>
            You have refreshed the rates!
            <i className='nes-icon is-large like animate'></i>
          </p>
        ) : (
          <p>
            You have {remainingTime} seconds left before you can refresh
            <i className='nes-icon is-large like animate'></i>
          </p>
        )}

        <button className='nes-btn' onClick={handleClose}>
          Close Box
        </button>
      </div>
    </IsometricPlane>
  ) : null;
};

export default WarningModal;
