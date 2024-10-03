import {gql, useQuery} from '@apollo/client';
import React from "react";
import LineChart from "./LineChart.tsx";

const FOOT_FALL_QUERY = gql(`
    query FootFallQuery {
        footFallData
    }
`);

const FootFallChart: React.FC = () => {
    const {loading, error, data} = useQuery(FOOT_FALL_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <div className="mt-6">
            <LineChart title="Foot fall Data" labels={labels} data={data.footFallData}/>
        </div>
    );
};

export default FootFallChart;