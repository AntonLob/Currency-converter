
export let date  = new Date()
 let now = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`


export let CURRENCY_CONVERTER_API = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${now}&json`

