// src/components/KeyMetrics.tsx
import {gql, useQuery} from '@apollo/client';
import React from "react";

const KEY_METRICS_QUERY = gql`
    query {
        keyMetrics
    }
`;

const KeyMetrics: React.FC = () => {
    const {loading, error, data} = useQuery(KEY_METRICS_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // Assuming the order of metrics in the array matches the design
    const metricLabels = ["Wrong Prescription", "Opened Late", "Bad outcome", "Late Check-in", "Delay in Lab", "Cardless visits", "Bio-Hazard waste disposal"];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {data.keyMetrics.map((value: number, index: number) => {
                console.log(index, value);
                return (
                    <div key={index} className="bg-white text-slate-500 p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold mb-2">{metricLabels[index]}</h3>
                        <p className="text-3xl font-bold">{value}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default KeyMetrics;