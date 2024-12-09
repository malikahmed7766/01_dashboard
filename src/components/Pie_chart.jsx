import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Pie_chart = () => {
    const [state, setState] = useState({
        series: [30, 70],
        options: {
            chart: {
                type: 'donut',
            },
            colors: ['#f00500', '#4d91ff'],
            labels: ['Red Zone', 'Blue Zone'],
            legend: {
                show: false,
            },
            dataLabels: {
                enabled: false,
                style: {
                    fontSize: '10px',
                    fontWeight: '300',
                },
                formatter: function (val, opts) {
                    return opts.w.globals.labels[opts.seriesIndex] + ": " + val.toFixed(1) + "%";
                },
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 700,
                        },
                        legend: {
                            fontSize: '16px',
                        },
                    },
                },
            ],
        },
    });

    return (
        <>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="donut" />
            </div>
            <div id="html-dist"></div>
        </>
    );
};

export default Pie_chart