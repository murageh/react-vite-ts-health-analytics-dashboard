import FootFallChart from "./charts/FootFallChart.tsx";
import PatientSatisfactionChart from "./charts/PatientSatisfactionChart.tsx";
import RevenueChart from "./charts/RevenueChart.tsx";

const MetricsPanel = () => {
    const footFallData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: 'Foot Fall',
                data: [1500, 1800, 2000, 2200, 2500, 2700],
                borderColor: 'rgb(99, 102, 241)',
                backgroundColor: 'rgba(99, 102, 241, 0.2)',
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const satisfactionData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: 'Patient Satisfaction',
                data: [7.5, 7.6, 7.8, 7.7, 8.0, 7.9],
                borderColor: 'rgb(99, 102, 241)',
                backgroundColor: 'rgba(99, 102, 241, 0.2)',
                fill: true,
                tension: 0.4,
            },
        ],
    };

    return (
        <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="col-span-1 bg-white shadow p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Foot Fall</h3>
                <FootFallChart/>
                <p className="text-xl font-bold mt-2">1.9k</p>
            </div>

            <div className="col-span-1 bg-white shadow p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Patient Satisfaction</h3>
                <PatientSatisfactionChart/>
                <p className="text-xl font-bold mt-2">7.8</p>
            </div>

            <div className="col-span-1 bg-white shadow p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Revenue</h3>
                <RevenueChart/>
                <p className="text-xl font-bold mt-2">4.2m</p>
            </div>
        </div>
    );
};

export default MetricsPanel;
