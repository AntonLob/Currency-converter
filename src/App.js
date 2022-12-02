import React from 'react'
import LiveCourse from './modules/LiveCourse/LiveCourse'
import CurrencyConverter from './modules/CurrencyConverter/CurrencyConverter'
import {useEffect } from 'react'
import './App.css'
import { useDispatch} from 'react-redux'
import { getCurrencyList } from './store/actions/actions'

function App() {
  let dispatch = useDispatch()



  useEffect(() => {
  dispatch(getCurrencyList())
  },[dispatch]);



  return (
    <div className='container'>
        <div className='block'>
          <LiveCourse />
          <CurrencyConverter />
        </div>
    </div>


  )
}

export default App