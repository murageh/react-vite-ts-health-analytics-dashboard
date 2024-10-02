import BasicFilters from '../components/BasicFilters.tsx';
import MetricsPanel from '../components/MetricsPanel';
import AnalyticsSidebar from "../layouts/AnalyticsSidebar.tsx";
import DateFilters from "../components/DateFilters.tsx";

const AnalyticsPage = () => {
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
                    <BasicFilters/>
                    <DateFilters/>
                    <MetricsPanel/>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsPage;
