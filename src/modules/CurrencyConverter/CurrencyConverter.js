import React  from 'react'
import { useSelector } from 'react-redux';
import CurrencyForm from '../CurrencyForm/CurrencyForm';
import './CurrencyConverter.css'


function СurrencyСonverter() {
  let {currencyValue1 , currencyValue2 , currency1 , currency2} = useSelector((state) => state )
  return (
    <div className='converter'>
      <CurrencyForm 
          id='1'
          currency={currency1}
          currencyValue={currencyValue1} />
          <div className='exchange'>
              <img src='https://cdn3.iconfinder.com/data/icons/ink-software-arrow/38/caret-arrows-exchange-horizontal-512.png' alt='...'/>
          </div>
      <CurrencyForm 
      id='2'
      currency={currency2} 
        currencyValue={currencyValue2} />
    </div>
  )
}

export default СurrencyСonverter