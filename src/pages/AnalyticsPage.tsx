import BasicFilters from '../components/BasicFilters.tsx';
import MetricsPanel from '../components/MetricsPanel';
import AnalyticsSidebar from "../layouts/AnalyticsSidebar.tsx";
import DateFilters from "../components/DateFilters.tsx";
import StaffTable from "../components/charts/StaffTable.tsx";
import {gql, useQuery} from "@apollo/client";

const KEY_METRICS_QUERY = gql(`
    query KeyMetrics {
        keyMetrics {
            Wrong_Prescription_Count
            Opened_Late_Count
            Wrong_Diagnosis_Count
            Wrong_Treatment_Count
            Wrong_Surgery_Count
            Late_CheckIn_Count
            Careless_Notes_Count
            Bad_Reception_Count
        }
    }
`);

const AnalyticsPage = () => {
    const {loading, error, data} = useQuery(KEY_METRICS_QUERY);

    if (loading) return <p>Loading...</p>;

    return (
        <div className={`flex flex-col gap-x-2`}>
            <h1 className={`text-3xl font-bold text-left my-2 mb-6`}>Analytics</h1>

            <div className="flex w-full">
                {/* Left-side filter panel */}
                <div className="min-w-1/4 flex-grow mr-2">
                    <AnalyticsSidebar/>
                </div>

                {/* Right-side charts and metrics */}
                <div className="w-full">
                    {
                        error ? (
                            <p className="text-red-500">
                                Error loading key metrics: {error.message}
                            </p>
                        ) : <></>
                    }
                    <BasicFilters keyMetrics={data.keyMetrics}/>
                    <DateFilters/>
                    <MetricsPanel/>
                    <StaffTable/>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsPage;
