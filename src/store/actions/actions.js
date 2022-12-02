import axios from 'axios'
import { CURRENCY_CONVERTER_API } from '../../Api/CurrencyConverterApi';

export const GET_CURRENCY_VALUE = 'GET_CURRENCY_VALUE';
export function GET_CURRENCY_VALUE_ACTION(value){
   return  {type: GET_CURRENCY_VALUE , payload: value}
}

export function getCurrencyValue(value , id){
    return (dispatch)=>{
        let arr = ['1' ,'2']
        let obj = {
            value,
            id1: id,
            id2: arr.find((el)=> el !== id)
        }
        dispatch(GET_CURRENCY_VALUE_ACTION(obj))
    }
}


export const GET_CURRENCY = 'GET_CURRENCY';
export function GET_CURRENCY_ACTION(value){
   return  {type: GET_CURRENCY , payload: value}
}

export function getCurrency(value , id){
    return (dispatch)=>{
        let arr = ['1' ,'2']
        let obj = {
            value,
            id1: id,
            id2: arr.find((el)=> el !== id)
        }
        dispatch(GET_CURRENCY_ACTION(obj))
    }
}


export const GET_CURRENCY_LIST = 'GET_CURRENCY_LIST';
export function GET_CURRENCY_LIST_ACTION(list){
   return  {type: GET_CURRENCY_LIST , payload: list}
}

export function getCurrencyList(){
    return (dispatch)=>{
        axios.get(CURRENCY_CONVERTER_API)
        .then(res => dispatch(GET_CURRENCY_LIST_ACTION(res.data)))
    }
}

