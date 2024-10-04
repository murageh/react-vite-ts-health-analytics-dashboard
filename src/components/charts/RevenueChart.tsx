// src/components/RevenueChart.tsx
import {gql, useQuery} from '@apollo/client';
import LineChart from './LineChart';
import React from "react";
import {useFilterContext} from "../../context/FilterContext.tsx";

const REVENUE_QUERY = gql(`
  query Revenue($startDate: String, $endDate: String, $period: String) {
    revenueData(startDate: $startDate, endDate: $endDate, period: $period) {
      labels
      data
    }
  }
`);

const RevenueChart: React.FC = () => {
    const {filters} = useFilterContext();
    const {loading, error, data} = useQuery(REVENUE_QUERY, {
        variables: {
            startDate: filters.startDate,
            endDate: filters.endDate,
            period: filters.period,
        },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const {labels, data: revenueData} = data.revenueData;

    return (
        <div className="mt-6">
            <LineChart title="Revenue" labels={labels} data={revenueData}/>
        </div>
    );
};

export default RevenueChart;