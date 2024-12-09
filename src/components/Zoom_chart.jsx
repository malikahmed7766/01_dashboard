import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Zoom_chart = () => {
    const dates = [
        { x: "2024-01-01", y: 1000000 },
        { x: "2024-01-02", y: 1200000 },
        { x: "2024-01-03", y: 900000 },
        { x: "2024-01-04", y: 1500000 },
        { x: "2024-01-05", y: 1100000 },
    ];

    const [state, setState] = useState({
        series: [{
            name: 'XYZ MOTORS',
            data: dates,
        }],
        options: {
            chart: {
                type: 'area',
                stacked: false,
                height: 350,
                zoom: {
                    type: 'x',
                    enabled: true,
                    autoScaleYaxis: true,
                },
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            markers: {
                size: 0,
            },
            title: {
                text: '',
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.5,
                    opacityTo: 0,
                    stops: [0, 90, 100],
                },
            },
            yaxis: {
                labels: {
                    formatter: function (val) {
                        return (val / 1000000).toFixed(0);
                    },
                },
                title: {
                    text: 'Price',
                },
            },
            xaxis: {
                type: 'datetime',
            },
            tooltip: {
                shared: false,
                y: {
                    formatter: function (val) {
                        return (val / 1000000).toFixed(0);
                    },
                },
            },
        },
    });

    return (
        <>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="area" />
            </div>
            <div id="html-dist"></div>
        </>
    );
};

export default Zoom_chart;
