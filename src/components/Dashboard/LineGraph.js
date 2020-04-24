import React from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";
let myLineChart;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"

export default class LineGraph extends React.PureComponent {
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const { labels, cases, deaths  } = this.props;

        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "line",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Cases",
                        data: cases,
                        fill: false,
                        borderColor: "#6610f2"
                    },
                    {
                        label: "Deaths",
                        data: deaths,
                        fill: false,
                        borderColor: "#E0E0E0"
                    }
                ]
            },
            options: {
                //responsive: true,
                layout: {
                    padding: {
                        top: 5,
                        left: 15,
                        right: 15,
                        bottom: 15
                    }
                }
              }
        });
    }

    render() {

        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
  }