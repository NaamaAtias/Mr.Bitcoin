import axios from 'axios'

export const bitcoinsService = {
  getRate,
//   getMarketPrice,
}

async function getRate(coins=1) {
  const { data } = await axios.get(` https://blockchain.info/tobtc?currency=USD&value=${coins}`)
  return data
}