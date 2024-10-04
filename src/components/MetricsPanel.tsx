import FootFallChart from "./charts/FootFallChart.tsx";
import PatientSatisfactionChart from "./charts/PatientSatisfactionChart.tsx";
import RevenueChart from "./charts/RevenueChart.tsx";

const MetricsPanel = () => {

    return (
        <div className="grid grid-cols-3 gap-4 mb-4">
            <FootFallChart/>
            <PatientSatisfactionChart/>
            <RevenueChart/>
        </div>
    );
};

export default MetricsPanel;
