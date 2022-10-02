import React, {Component} from 'react';
import {stock} from "../resources/stock"





class StockRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            price: null,
            date: null,
            time: null,
            dollar_change: null,
            percent_change: null
        }
    }

    changeStyle() {
        return {
            color: (this.state.dollar_change > 0) ? "#4caf50" : "#e53935",
            fontSize: '0.8rem',
            marginLeft: 5
        }
    }

    applyData(data) {
        this.setState({
            price: data.price.toFixed(2),
            date: data.date,
            time: data.time,
        });
        stock.getYesterdaysClose(this.props.ticker, data.date, (yesterday) => {
            const dollar_change = (data.price - yesterday.price).toFixed(2)
            const percent_change = (100  * dollar_change / yesterday.price).toFixed(2)
            this.setState({
                dollar_change: `${dollar_change}`,
                percent_change: `  (${percent_change}%)`
            })
        })
    }

    async componentDidMount() {
        // const url = `${iex.base_url}/stock/${this.props.ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`
        // const response = await fetch(url)
        // const json = await response.json()
        // console.log(json)
        stock.latestPrice(this.props.ticker, this.applyData.bind(this))
    }

    render() {
        return (
            <li className="list-group-item">
                <b>{this.props.ticker}</b> ${this.state.price}
                <span className="change" style={this.changeStyle()}>
                    {this.state.dollar_change}
                    &nbsp;
                    {this.state.percent_change}
                </span>
            </li>

        )
    }

}

export default StockRow;