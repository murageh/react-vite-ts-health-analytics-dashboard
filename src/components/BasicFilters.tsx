import Button from "./Button.tsx";
import React from "react";
import {toast} from "react-toastify";

const BasicFilters = () => {
    const filters = ["Wrong Prescription", "Delay in Lab", "Opened Late", "Bad Reception", "Late Check In", "Careless Notes"];
    const [selected, setSelected] = React.useState<string | null>("Opened Late");

    return (
        <div className={`bg-white p-4 rounded-md flex flex-col items-start gap-2 mb-4`}>
            <h2 className={`text-xs text-slate-400 font-bold text-left uppercase`}>Key Metrics</h2>

            <div className="flex justify-start flex-wrap gap-2 mb-4">
                {filters.map((filter, index) => (
                    <Button
                        key={index}
                        wide
                        noShade
                        text={filter}
                        subText={`${Math.floor(Math.random() * 100)} Incidents`}
                        selected={selected === filter}
                        onClick={() => {
                            toast.success(`Filtering by ${filter}`);
                            // TODO: Do actual filtering
                            setSelected(filter);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default BasicFilters;
