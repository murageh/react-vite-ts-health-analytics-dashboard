import Button from "./Button.tsx";
import {toast} from "react-toastify";
import {useFilterContext} from "../context/FilterContext.tsx";

const BasicFilters = ({keyMetrics}: { keyMetrics: { [key: string]: number } }) => {
    const {filters, setFilters} = useFilterContext();
    const incidentTypes = Object.keys(keyMetrics).filter(x => x != '__typename').map((key) => key.replace(/_/g, " "));

    const handleFilterChange = (incidentType: string) => {
        toast.success(`Selected ${incidentType}`);
        setFilters({...filters, incidentType}); // Update the incidentType in the filter context
    };


    return (
        <div className={`bg-white p-4 rounded-md flex flex-col items-start gap-2 mb-4`}>
            <h2 className={`text-xs text-slate-400 font-bold text-left uppercase`}>Key Metrics</h2>

            <div className="flex justify-start flex-wrap gap-2 mb-4">
                {incidentTypes.map((incidentType, index) => (
                    <Button
                        key={index}
                        wide
                        noShade
                        text={incidentType.replace(/_/g, " ")}
                        subText={`${keyMetrics[incidentType.replace(/ /g, "_")]} Incidents`}
                        selected={filters.incidentType === incidentType}
                        onClick={() => handleFilterChange(incidentType)}
                    />
                ))}
            </div>
        </div>
    );
};

export default BasicFilters;
