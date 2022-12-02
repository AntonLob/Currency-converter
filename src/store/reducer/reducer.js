import { GET_CURRENCY_VALUE, GET_CURRENCY_LIST, GET_CURRENCY } from "../actions/actions"


let initialValue = {
  currencyList: [],
  currency1:'AUD',
  currency2:'AUD',
  currencyValue1:0 ,
  currencyValue2:0,
}

export default function currencyReducer(store = initialValue , {type , payload}){
    switch(type){
        case(GET_CURRENCY_LIST):
            return store = {...store , currencyList: payload}
        case(GET_CURRENCY_VALUE):
            return store =  {...store ,  
                    [`currencyValue${payload.id1}`]: payload.value , 
                    [`currencyValue${payload.id2}`]: calcResult(payload.value , store.currencyList, store[`currency${payload.id1}`] , 
                    store[`currency${payload.id2}`] )}
        case(GET_CURRENCY):
                return store = {...store , 
                    [`currency${payload.id1}`]: payload.value , 
                    [`currencyValue${payload.id2}`]:0 , 
                    [`currencyValue${payload.id1}`]:0  }
        default: return store
    }
}


 export function calcResult(value , currencyList , currency1 , currency2){
          let base = currencyList.find((el)=>{
            return el.cc === currency1
          })
          let {rate} = currencyList.find((el)=> {
           return el.cc === currency2
          })
      
           let result = value /  rate * base.rate
           return result.toFixed(2)
}