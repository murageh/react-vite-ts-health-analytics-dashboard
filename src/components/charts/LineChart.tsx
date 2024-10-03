import {Line} from 'react-chartjs-2';
import {CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement, Tooltip} from 'chart.js';
import React from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
);

interface LineChartProps {
    title: string;
    labels: string[];
    data: number[];
}

const LineChart: React.FC<LineChartProps> = ({title, labels, data}) => {

    const splicedLabels = labels.slice(0, data.length);

    const chartData = {
        labels: splicedLabels,
        datasets: [
            {
                label: title,
                data: data,
                tension: 0.5,
                pointRadius: 2,
                pointBorderColor: "blue",
                pointBackgroundColor: "rgba(125,143,216,0.8)",
                borderColor: "rgb(166,123,102)",
                borderWidth: 2,
                backgroundColor: "orange-red",
                fill: true,
                maxBarThickness: 6
            },
        ],
    };

    const totalDuration = 1000;
    const delayBetweenPoints = totalDuration / data.length;
    const previousY = (ctx: {
        index: number;
        chart: {
            scales: { y: { getPixelForValue: (arg0: number) => any; }; };
            getDatasetMeta: (arg0: any) => {
                (): any;
                new(): any;
                data: { getProps: (arg0: string[], arg1: boolean) => { (): any; new(): any; y: any; }; }[];
            };
        };
        datasetIndex: any;
    }) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
    const animation = {
        x: {
            type: 'number',
            easing: 'ease-in-out',
            duration: delayBetweenPoints,
            from: NaN, // the point is initially skipped
            delay(ctx: { type: string; xStarted: boolean; index: number; }) {
                if (ctx.type !== 'data' || ctx.xStarted) {
                    return 0;
                }
                ctx.xStarted = true;
                return ctx.index * delayBetweenPoints;
            }
        },
        y: {
            type: 'number',
            easing: 'ease-in-out',
            duration: delayBetweenPoints,
            from: previousY,
            delay(ctx: { type: string; yStarted: boolean; index: number; }) {
                if (ctx.type !== 'data' || ctx.yStarted) {
                    return 0;
                }
                ctx.yStarted = true;
                return ctx.index * delayBetweenPoints;
            }
        }
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                display: false, // hide it completely
                grid: {
                    display: false, // more fine grained control is available with x and y axis options
                },
                ticks: {
                    display: false, // hide labels
                }
            },
            y: {
                display: false, // hide it completely
                grid: {
                    display: false, // more fine grained control is available with x and y axis options
                },
                ticks: {
                    display: false, // hide labels
                }
            },
        },
        interaction: {
            intersect: false,
            mode: "index"
        },
        animation
    } as const;

    return <Line data={chartData} options={options} className={`p-4 h-full max-w-full self-center`}/>;
}

export default LineChart;