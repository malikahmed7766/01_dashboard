import React from 'react';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Pie_chart_2 = () => {
    const [state, setState] = useState({
        series: [44, 55, 13, 43, 22],
        options: {
            chart: {
                width: "20%",
                type: 'pie',
                toolbar: {
                    show: false,
                },
            },
            colors: ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FFD700'],
            labels: ['Total Revenue', 'Pretex Income', 'Gross Profit', 'Net Income', 'Operating Income'],
            dataLabels: {
                enabled: true,
                formatter: (val, opts) => {
                    return `${opts.w.config.labels[opts.seriesIndex]}: ${val.toFixed(1)}%`;
                },
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 100,
                        },
                        legend: {
                            position: 'top',
                        },
                    },
                },
            ],
        },
    });

    return (
        <>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="pie" width={250} />
            </div>
            <div id="html-dist"></div>
        </>
    );
};

export default Pie_chart_2;