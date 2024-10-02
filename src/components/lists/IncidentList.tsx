// src/components/IncidentList.tsx
import {useQuery} from '@apollo/client';

import React from "react";
import {gql} from "../../__generated__";
import {Incident} from "../../__generated__/graphql.ts"; // Assuming you're using code generation

const INCIDENTS_QUERY = gql(`
    query Incidents {
        incidents {
            id
            patientName
            incidentType
            date
        }
    }
`);

const IncidentList: React.FC = () => {
    const {loading, error, data} = useQuery(INCIDENTS_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Reported Incidents</h2>
            <ul>
                {data?.incidents.map((incident: Incident) => (
                    <li key={incident.id} className="flex items-center justify-between p-3 border-b border-gray-200">
                        <div>
                            <p className="font-medium">{incident.patientName}</p>
                            <p className="text-gray-600">{incident.incidentType}</p>
                        </div>
                        <p className="text-gray-600">{new Date(incident.date).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IncidentList;