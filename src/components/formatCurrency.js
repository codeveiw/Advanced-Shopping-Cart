import React from 'react'
const currency_formatter =new Intl.NumberFormat(undefined,{
    currency: "USD",
    style:'currency'
})
const formatCurrency = (price) => {
  return currency_formatter.format(price)
}
export default formatCurrency;
