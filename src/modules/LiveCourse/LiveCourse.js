import React, { useState , useEffect } from 'react'
import './LiveCourse.css'
import {date} from '../../Api/CurrencyConverterApi'
import {useSelector} from 'react-redux'
import {calcResult} from '../../store/reducer/reducer'


function LiveCourse() {
  let [currencyText1 , setCurrencyText1] = useState('')
  let [currencyText2 , setCurrencyText2] = useState('')
  let [result , setResult] = useState(0)
  let {currency1 , currency2 , currencyList} = useSelector(store => store)

useEffect(() => {
  if(currencyList.length > 0){
    let {txt: txt1} = currencyList.find((el) => el.cc === currency1)
    setCurrencyText1(txt1)
    let {txt: txt2} = currencyList.find((el) => el.cc === currency2)
    setCurrencyText2(txt2)
    setResult(calcResult(1 ,currencyList , currency1 , currency2))
  }
}, [currency1 , currency2 , currencyList])


  return (
    <div className='generalInformation'>
      <div className="liveCourse">
          1 {currencyText1} = <span>{result} {currencyText2}</span>
      </div>
      <div className="time">
          Сегодня: {`${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}`}
      </div>
    </div>
  )
}

export default LiveCourse