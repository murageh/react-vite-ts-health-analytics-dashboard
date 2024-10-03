// src/components/RevenueChart.tsx
import {gql, useQuery} from '@apollo/client';
import LineChart from './LineChart';
import React from "react";

const REVENUE_QUERY = gql(`
  query Revenue {
    revenueData
  }
`);

const RevenueChart: React.FC = () => {
    const {loading, error, data} = useQuery(REVENUE_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // Assuming you have labels for the revenue data
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return (
        <div className="mt-6">
            <LineChart title="Revenue" labels={labels} data={data.revenueData}/>
        </div>
    );
};

export default RevenueChart;