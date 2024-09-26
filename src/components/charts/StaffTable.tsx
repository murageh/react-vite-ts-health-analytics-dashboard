import {gql, useQuery} from '@apollo/client';
import React from "react";
import {StaffMember} from "../../__generated__/graphql.ts";

const STAFF_MEMBERS_QUERY = gql(`
  query StaffMembers {
    staffMembers {
      id
      name
      efficiency
      nps
      efficiencyDelta
      reportedIssues
    }
  }
`);

const StaffTable: React.FC = () => {
    const {loading, error, data} = useQuery(STAFF_MEMBERS_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div
            className="mt-6 overflow-x-auto overflow-y-auto"> {/* Add overflow-x-auto for horizontal scrolling if needed */}
            <h2 className="text-xl font-semibold mb-4">Staff Performance</h2>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Staff Name
                    </th>
                    <th scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Efficiency
                    </th>
                    <th scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        NPS
                    </th>
                    <th scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Efficiency Δ
                    </th>
                    <th scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Reported Issues
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {data.staffMembers.map((staffMember: StaffMember) => (
                    <tr key={staffMember.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{staffMember.name}</div>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{staffMember.efficiency}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{staffMember.nps}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                                <span
                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${staffMember.efficiencyDelta > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {staffMember.efficiencyDelta > 0 ? '+' : ''}{staffMember.efficiencyDelta}
                                </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {staffMember.reportedIssues}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default StaffTable;