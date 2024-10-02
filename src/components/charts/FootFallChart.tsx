import {gql, useQuery} from '@apollo/client';
import React from "react";
import {Line} from "react-chartjs-2";

const FOOT_FALL_QUERY = gql(`
    query FootFallQuery {
        footFallData
    }
`);

const FootFallChart: React.FC = () => {
    const {loading, error, data} = useQuery(FOOT_FALL_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // Assuming you have labels for the foot fall data (e.g., dates or time periods)
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const footFallData = {
        labels: labels.slice(0, data.footFallData.length),
        datasets: [
            {
                label: 'Foot Fall',
                data: data.footFallData,
                borderColor: 'rgb(99, 102, 241)',
                backgroundColor: 'rgba(99, 102, 241, 0.2)',
                fill: true,
                tension: 0.4,
            },
        ],
    };

    return (
        <div className="mt-0">
            <Line data={footFallData}/>
        </div>
    );
};

export default FootFallChart;