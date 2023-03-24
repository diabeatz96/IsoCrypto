import React from 'react';

function CurrencySelection({ currencyName, coinHandler, btcType }) {
  return (
    <div>
      <div className='nes-field is-inline'>
        <label htmlFor='USD'> {currencyName} </label>
        <input
          defaultValue={1000}
          type='number'
          min='1'
          maxLength={10}
          onChange={coinHandler}
          id='warning_field'
          className='nes-input is-warning'
          placeholder={100}
        />
        <span className='is-warning'>
          <i className='nes-icon coin is-small'></i>
        </span>
        <span className='is-primary'> {btcType}</span>
      </div>
    </div>
  );
}

export default CurrencySelection;
