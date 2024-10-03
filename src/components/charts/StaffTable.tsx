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

    const DeltaSummary = ({delta}: { delta: number }) => {
        // +/- % based on efficiencyDelta. Green/red up/down facing arrow, accordingly
        return (
            <div
                className={`ml-2 inline-flex text-xs leading-5 font-semibold rounded-full text-slate-500`}
            >
                {delta > 0 ? '+' : '-'}{delta}%

                {/*  Arrow  */}
                <span
                    className={`ml-1 inline-flex items-center justify-center h-4 w-4 rounded-full ${delta > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                >
                    {delta > 0 ? <>&#x2BC5;</> : <>&#x2BC6;</>}
                </span>

            </div>
        );
    }

    const EfficiencyMeter = ({efficiency}: { efficiency: number }) => {
        // A horizontal bar with a width of efficiency% and a faint gray border
        console.log(efficiency);
        return (
            <div
                className={`mx-2 flex-grow h-2 bg-gray-100 rounded-md border border-gray-200`}
            >
                <div
                    className={`h-full bg-blue-700 rounded-md`}
                    style={{width: `${efficiency * 100}%`}}
                />
            </div>
        );
    }

    const mostIssues = data.staffMembers.reduce((acc: StaffMember, staffMember: StaffMember) => {
        return staffMember.reportedIssues > acc.reportedIssues ? staffMember : acc;
    }).reportedIssues;

    const ReportedIncidentMeter = ({reportedIssues}: { reportedIssues: number }) => {
        // uses the most reported issues to set the width of the bar, then sets the width of the bar to reportedIssues/mostIssues * 100%
        const percentage = (reportedIssues / mostIssues) * 100;
        return (
            <div
                className={`mx-2 flex-grow h-2 bg-gray-100 rounded-md border border-gray-200`}
            >
                <div
                    className={`h-full bg-blue-700 rounded-md`}
                    style={{width: `${percentage}%`}}
                />
            </div>
        );
    }

    return (
        <div
            className="mt-6 overflow-x-auto overflow-y-auto bg-white rounded-md p-4"> {/* Add overflow-x-auto for horizontal scrolling if needed */}
            <h2 className="text-left text-xs text-slate-500 uppercase font-semibold mb-4">Staff Performance</h2>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col"
                        className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        No.
                    </th>
                    <th scope="col"
                        className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Staff Name
                    </th>
                    <th scope="col"
                        className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Efficiency Delta (Δ)
                    </th>
                    <th scope="col"
                        className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        NPS Delta (Δ)
                    </th>
                    <th scope="col"
                        className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Efficiency
                    </th>
                    <th scope="col"
                        className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Reported Issues
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {data.staffMembers.map((staffMember: StaffMember) => {
                    return (
                        <tr key={staffMember.id} className={"cursor-pointer"}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{staffMember.id}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-primary">{staffMember.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="ml-4">
                                        <div className="text-sm text-gray-900">{staffMember.efficiency}</div>
                                    </div>
                                    <DeltaSummary delta={staffMember.efficiencyDelta}/>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="ml-4">
                                        <div className="text-sm text-gray-900">{staffMember.nps}</div>
                                    </div>
                                    <DeltaSummary delta={staffMember.npsDelta}/>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="ml-4">
                                        <div className="text-sm text-gray-900">{staffMember.efficiency * 100}%</div>
                                    </div>
                                    <EfficiencyMeter efficiency={staffMember.efficiency}/>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="flex items-center">
                                    <div className="ml-4">
                                        <div className="text-sm text-gray-900">{staffMember.reportedIssues}</div>
                                    </div>
                                    <ReportedIncidentMeter reportedIssues={staffMember.reportedIssues}/>
                                </div>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default StaffTable;