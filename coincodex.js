const axios = require("axios")
const cheerio = require("cheerio")

const app = async () => {

  const coincodex = await fetchData('https://coincodex.com/crypto/bitcoin/price-prediction')
  const result = extractData(coincodex)

}

const fetchData = (url) => {
  return axios.get(url).then(response => response.data)
}


const extractData = (coincodex) => {
  const $ = cheerio.load(coincodex);
  const coincodex_price = $('body > app-root > app-root > div > div > div > div.col.main-col > app-coin-price-prediction > app-coin-prediction-chart > section > div.prediction-ranges > div.prediction-range.selected > div:nth-child(2)').text()
  console.log(parseFloat(coincodex_price.replace(/[^0-9\.]+/g, "")).toFixed(0))
  
    // จำ cache ค่า
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

localStorage.setItem('priceprediction', parseFloat(coincodex_price.replace(/[^0-9\.]+/g, "")).toFixed(0));

}

app()