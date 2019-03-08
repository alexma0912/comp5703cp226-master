import React from 'react';
import "../../../css/exchangeList.css";
import echarts from 'echarts';
import Candlestick from '../../../charts/Candlestick';
import axios from "axios";

export default class Overall_Candlestick_EUR extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nData: []
        }
    }

    componentDidMount(){
        axios
            .get("http://127.0.0.1:3000/api/all-eur-day")
            .then(response => {
                const newData = response.data.map(d => {
                    return {
                        date: d._id.year + "/" + d._id.month + "/" + d._id.day,
                        open: d.Open_price,
                        close: d.Close_price,
                        high: d.Highest_price,
                        low: d.Lowest_price
                    };
                });
                //console.log(newData);
                const newState = Object.assign({}, this.state, {
                    nData: newData
                });

                this.setState(newState);
            })
            .catch(error => console.log(error));
    };

    render() {
        return (
            <div>
                <div id="section_content">
                    <ul style={styles.container}>
                        {this.getAllCharts()}
                    </ul>
                </div>
            </div>
        )
    }

    getAllCharts = () => {
        const charts = [
            {type: 'candlestick', title: 'EUR/BTC Candlestick Chart of the Whole Market'}
        ];

        return charts.map((item, index) => {
            return (
                <li key={item.type} className="box" style={styles.item}>
                    {this.renderTitle(item)}
                    <div style={{ padding: '0 10px'}}>
                        {this.renderChart(item.type)}
                    </div>
                </li>
            )
        })
    };

    renderTitle = (item) => {
        return (
            <div style={{padding: 10}}>{item.title}</div>
        )
    };

    renderChart = (type) => {
        switch (type) {
            case 'candlestick':
                return <Candlestick echarts={echarts} data={this.state.nData} />;
            default:
                break;
        }
    }
}

const styles = {
    container: {
        padding: '10px 0'
    },
    item: {
        margin: '10px 0',
        background: '#FFFFFF'
    }
};