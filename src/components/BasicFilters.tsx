import Button from "./Button.tsx";
import React from "react";

const BasicFilters = () => {
    const filters = ["Wrong Prescription", "Delay in Lab", "Opened Late", "Bad Reception", "Late Check In", "Careless Notes"];
    const [selected, setSelected] = React.useState<string | null>(null);

    return (
        <div className={`bg-white p-4 rounded-md flex flex-col items-start gap-2 mb-4`}>
            <h2 className={`text-xs text-slate-400 font-bold text-left uppercase`}>Key Metrics</h2>

            <div className="flex justify-start flex-wrap gap-2 mb-4">
                {filters.map((filter, index) => (
                    <Button
                        key={index}
                        wide
                        text={filter}
                        subText={`${Math.floor(Math.random() * 100)} Incidents`}
                        selected={selected === filter}
                        onClick={() => setSelected(filter)}
                    />
                ))}
            </div>
        </div>
    );
};

export default BasicFilters;
