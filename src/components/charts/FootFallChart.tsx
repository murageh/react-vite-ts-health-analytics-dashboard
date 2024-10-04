import {gql, useQuery} from '@apollo/client';
import React from "react";
import LineChart from "./LineChart.tsx";
import {useFilterContext} from "../../context/FilterContext.tsx";

const FOOT_FALL_QUERY = gql(`
    query FootFallData($startDate: String, $endDate: String, $period: String) {
        footFallData(startDate: $startDate, endDate: $endDate, period: $period) {
            labels
            data
        }
    }
`);

const FootFallChart: React.FC = () => {
    const {filters} = useFilterContext(); // Access filters from context
    console.log({filters});

    const {loading, error, data} = useQuery(FOOT_FALL_QUERY, {
        variables: {
            startDate: filters.startDate || '',
            endDate: filters.endDate || '',
            period: filters.period,
        },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const {labels, data: footFallData} = data.footFallData;

    return (
        <div className="mt-6">
            <LineChart title="Footfall Data" labels={labels} data={footFallData}/>
        </div>
    );
};

export default FootFallChart;