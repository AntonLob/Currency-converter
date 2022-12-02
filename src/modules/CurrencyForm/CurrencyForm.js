import React from 'react'
import './CurrencyForm.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrencyValue , getCurrency } from '../../store/actions/actions'

function CurrencyForm({currency , currencyValue , id}) {
  let currencyList = useSelector((state)=> state.currencyList)
  let dispatch = useDispatch()

  

  function getValue(value , id){
    dispatch(getCurrencyValue(value , id))
  }

  function getCurr(e){
    dispatch(getCurrency(e.target.value , id))
  }
  return (
        <div className='converterElement'>
                  <select value={currency} onChange={(e)=>getCurr(e)}>
            {currencyList.map((curr)=>{
             return    <option key={curr.cc}>{curr.cc}</option>
          })}
                  </select>
          <input value={currencyValue} onChange={(e)=>getValue(e.target.value , id)}/>
        </div>
  )
}



export default CurrencyForm