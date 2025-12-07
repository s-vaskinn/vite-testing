import React, { useState, useEffect } from 'react';
import {Line} from 'react-chartjs-2';
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend,
    TimeScale, 
    Filler
} from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale
);

const API_URL = import.meta.env.VITE_COIN_API_URL

const CoinChart = (coinId) => {
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPrices = async () => {
            const res = await fetch(`${API_URL}${coinId}/market_chart?vs_currency=usd&days=7`);
            const data = await res.json();
            console.log(data);
            const prices = data.prices.map((price) => ({
                x: price[0],
                y: price[1]
            }));
            console.log(prices);
            setChartData({
                datasets: [
                    {
                        Label: "Price (USD)",
                        data: prices,
                        Filler: true,
                        borderColor: "#007bff",
                        backgroundColor: "rgba(0, 123, 255, 0.1)",
                        pointRadius: 0,
                        tension: 0.1,
                    }
                ]
            });
            setLoading(false);
        };

        fetchPrices();
    }, [coinId]);
    if(loading) {
        return <div>Loading chart...</div>;
    }
    return (
        <div style={{ marginTop: "30px" }}>
            <Line
                data={chartData}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                        }
                    },
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'day'
                            },
                            ticks: {
                                autoSkip: true,
                                maxTicksLimit: 7
                            }
                        },
                        y: {
                            ticks: {
                                callback: (value) => `$${value.toLocaleString()}`
                            }
                        }
                    }
                }}
            />
        </div>
    );
};

export default CoinChart;