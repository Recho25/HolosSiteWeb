import {iex} from "../config/iex";


export const stock = {

    latestPrice: (ticker, callback) => {
        const url = stock.latestPriceURL(ticker)
        fetch(url)
            .then((response) => response.json())
            .then((data) =>  callback(stock.formatPriceData(data)))
    },

    latestPriceURL: (ticker) => {
        const url = `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`
        return url
    },

    formatPriceData: (data) => {
        const stockData = data[data.length - 1]
        const formattedData = {}
        formattedData.price = stockData.close
        formattedData.date = stockData.date
        formattedData.time = stockData.label
        return formattedData
    },

    getYesterdaysClose: (ticker, date, callback) => {
        fetch(stock.yesterdaysCloseURL(ticker, date))
            .then((response) => response.json())
            .then((data) =>  callback(stock.formatPriceData(data)))

    },

    yesterdaysCloseURL: (ticker, date) =>  {
        const url = `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&exactDate=20220822&token=${iex.api_token}`
        return url
    }


};