import FootFallChart from "./charts/FootFallChart.tsx";
import PatientSatisfactionChart from "./charts/PatientSatisfactionChart.tsx";
import RevenueChart from "./charts/RevenueChart.tsx";
import React from "react";

const MetricsPanel = () => {

    const ChartCard = ({title, children: chart, keyValue, metric, change}: {
        title: string,
        children: React.ReactNode,
        keyValue: string,
        metric: string,
        change: string
    }) => {
        return (
            <div className="col-span-1 gap-1 bg-white shadow p-4 rounded-lg overflow-clip">
                <h3 className="text-left w-full text-lg font-semibold whitespace-nowrap mb-1">{title}</h3>
                <div className={`flex flex-col lg:flex-row items-center justify-between`}>
                    <div className="flex flex-col justify-center items-start">
                        <p className="text-xl text-blue-900 font-bold mt-1">{keyValue}</p>
                        <p className={`text-sm text-slate-500`}>{metric}</p>
                        <p className={`text-xs ${change.includes('+') ? 'text-green-400' : 'text-red-400'} uppercase mt-2`}>{change}</p>
                    </div>
                    {chart}
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-3 gap-4 mb-4">
            <ChartCard title={"Foot Fall"} keyValue={"1.9k"} metric={"incidents"} change={"+ 10%"}>
                <FootFallChart/>
            </ChartCard>

            <ChartCard title={"Patient Satisfaction"} keyValue={"7.8"} metric={"average review"} change={"+ 10%"}>
                <PatientSatisfactionChart/>
            </ChartCard>

            <ChartCard title={"Revenue"} keyValue={"4.2m"} metric={"KES"} change={"- 10%"}>
                <RevenueChart/>
            </ChartCard>
        </div>
    );
};

export default MetricsPanel;
