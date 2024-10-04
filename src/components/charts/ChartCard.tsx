import React from "react";

const ChartCard = ({title, children: chart, keyValue, metric, change}: {
    title: string,
    children: React.ReactNode,
    keyValue: number,
    metric: string,
    change: number
}) => {
    return (
        <div className="col-span-1 gap-1 bg-white shadow p-4 rounded-lg overflow-clip">
            <h3 className="text-left w-full text-lg font-semibold whitespace-nowrap mb-1">{title}</h3>
            <div className={`flex flex-col lg:flex-row items-center justify-between`}>
                <div className="flex flex-col justify-center items-start">
                    <p className="text-2xl text-primary font-bold mt-1">{keyValue.toLocaleString()}</p>
                    <p className={`text-sm text-slate-500`}>{metric}</p>
                    <p className={`text-xs font-semibold ${change > 0 ? 'text-green-400' : 'text-red-400'} uppercase mt-2`}>
                        {change > 0 ? '+' : ''}{change.toLocaleString()}%
                    </p>
                </div>
                {chart}
            </div>
        </div>
    );
};

export default ChartCard;