import {gql, useQuery} from '@apollo/client';
import LineChart from './LineChart';
import React from "react";

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

    return (
        <div className="mt-6">
            <LineChart title="Foot Fall" labels={labels} data={data.footFallData}/>
        </div>
    );
};

export default FootFallChart;