import {gql, useQuery} from '@apollo/client';
import LineChart from './LineChart';
import React from "react";

const PATIENT_SATISFACTION_QUERY = gql(`
    query PatientSatisfactionData {
        patientSatisfactionData
    }
`);

const PatientSatisfactionChart: React.FC = () => {
    const {loading, error, data} = useQuery(PATIENT_SATISFACTION_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // Assuming you have labels for the patient satisfaction data
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return (
        <div className="mt-6">
            <LineChart title="Patient Satisfaction" labels={labels} data={data.patientSatisfactionData}/>
        </div>
    );
};

export default PatientSatisfactionChart;