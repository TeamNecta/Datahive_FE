import Select from '@/components/Select';
import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';
import { Bar, Line, Scatter } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);
const Visualize = () => {
    const [dataframe, setDataframe] = useState<any>(null);
    const [data, setData] = useState<any>(null);
    const [options, setOptions] = useState<any>(null);
    const [type, setType] = useState<any>(null);
    useEffect(() => {
        try {
            const _dataframe = JSON.parse(localStorage.getItem('dataframe') || "");
            _dataframe && setDataframe(_dataframe);
        } catch (error) {
            alert(`Error loading dataframe ${error}`);
        }
    }, []);
    return (
        dataframe && <div className='h-full min-h-screen p-4 bg-gradient-to-r from-gray-800 to-slate-900 flex flex-row gap-4'>
            <form className='flex flex-col gap-4 w-full max-w-xl' onSubmit={(e: any) => {
                if (!dataframe) return;
                {/* Render values from form in terms of graph using chart.js */ }
                e.preventDefault();
                const x = e.target[0].value;
                const y = e.target[1].value;
                const type = e.target[2].value;
                switch (type) {
                    case "box":
                        const boxData = {
                            labels: Array.from(JSON.parse(dataframe.data)[x]),
                            datasets: [
                                {
                                    label: y,
                                    data: JSON.parse(dataframe.data)[y],
                                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                    borderColor: 'rgba(255, 99, 132, 1)',
                                    borderWidth: 1,
                                },
                            ],
                        };
                        const boxOptions = {
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            beginAtZero: true,
                                        },
                                    },
                                ],
                            },
                        };
                        setData(boxData);
                        setOptions(boxOptions);
                        setType("box");
                        break;
                        case "line":
                            const lineData = {
                                labels: Array.from(JSON.parse(dataframe.data)[x]),
                                datasets: [
                                    {
                                        label: y,
                                        data: JSON.parse(dataframe.data)[y],
                                        fill: false,
                                        backgroundColor: 'rgb(255, 99, 132)',
                                        borderColor: 'rgba(255, 99, 132, 0.2)',
                                    },
                                ],
                            };
                            const lineOptions = {
                                scales: {
                                    yAxes: [
                                        {
                                            ticks: {
                                                beginAtZero: true,
                                            },
                                    },
                                ],
                            },
                        };
                        setData(lineData);
                        setOptions(lineOptions);
                        setType("line");
                        break;
                        case "scatter":
                            const scatterData = {
                                labels: Array.from(JSON.parse(dataframe.data)[x]),
                                datasets: [
                                    {
                                        label: y,
                                        data: JSON.parse(dataframe.data)[y],
                                        fill: false,
                                        backgroundColor: 'rgb(255, 99, 132)',
                                        borderColor: 'rgba(255, 99, 132, 0.2)',
                                    },
                                ],
                            };
                            const scatterOptions = {
                                scales: {
                                    yAxes: [
                                        {
                                            ticks: {
                                                beginAtZero: true,
                                            },
                                        },
                                    ],
                                },
                        };
                        setData(scatterData);
                        setOptions(scatterOptions);
                        setType("scatter");
                        break;
                    }
                    
                }}><div className="w-full flex flex-col gap-4">
                    <h1>Visualize</h1>
                
                    <Select data={dataframe.columns} text="X:" />
                    <Select data={dataframe.columns} text="Y:" />
            </div>
                <Select data={["box", "line", "scatter"]} text="Type" />
                <button className='btn btn-primary'>Visualize</button>
            </form>
            <div className='p-8 bg-slate-300 rounded-xl mt-4 w-full max-w-3/4'>
                {(type && type == "box" && data && options && <Bar data={data} options={options} />
                    || type == "line" && data && options && <Line data={data} options={options} />
                    || type == "scatter" && data && options && <Scatter data={data} options={options} />) || <h1 className='text-primary-focus opacity-40 text-6xl flex flex-col items-center justify-center'>Nothing to visualize</h1>}
            </div>

        </div>
    )
}

export default Visualize