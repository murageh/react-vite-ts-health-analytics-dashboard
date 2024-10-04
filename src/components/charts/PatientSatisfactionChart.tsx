import {gql, useQuery} from '@apollo/client';
import LineChart from './LineChart';
import React from "react";
import {useFilterContext} from "../../context/FilterContext.tsx";

const PATIENT_SATISFACTION_QUERY = gql(`
    query PatientSatisfactionData($startDate: String, $endDate: String, $period: String) {
        patientSatisfactionData(startDate: $startDate, endDate: $endDate, period: $period) {
            labels
            data
        }
    }
`);

const PatientSatisfactionChart: React.FC = () => {
    const {filters} = useFilterContext();
    const {loading, error, data} = useQuery(PATIENT_SATISFACTION_QUERY, {
        variables: {
            startDate: filters.startDate,
            endDate: filters.endDate,
            period: filters.period,
        },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const {labels, data: patientSatisfactionData} = data.patientSatisfactionData;

    return (
        <div className="mt-6">
            <LineChart title="Patient Satisfaction" labels={labels} data={patientSatisfactionData}/>
        </div>
    );
};

export default PatientSatisfactionChart;