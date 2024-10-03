import React from "react";
import {TbChartCandleFilled} from "react-icons/tb";
import {toast} from "react-toastify";

// has a horizontal list of filters - Day, Week, Month, Year. All these, when selected, have a blue border. Slightly rounded corners.
// On the right after these filters, is a node denoting the selected period e.g., <Filter icon> 10Dec 2021 - 10Jan 2022
const DateFilters = () => {
    const filters = ["Day", "Week", "Month", "Year"];
    const [selected, setSelected] = React.useState<string | null>("Month");

    return (
        <div className={`w-full bg-white p-4 rounded-md flex flex-col items-start gap-2 mb-4`}>
            <h2 className={`text-xs text-slate-400 font-bold text-left uppercase`}>
                FILTER INCIDENTS BY DATE
            </h2>

            <div className="w-full flex justify-start flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-2">
                    {filters.map((filter) => (
                        <li
                            key={filter}
                            className={`text-sm font-normal text-left flex items-center justify-start gap-x-2 px-4 py-4 rounded-md border border-gray-200 ${selected === filter ? 'text-primary border-3 border-primary' : 'hover:bg-gray-100'}`}
                            onClick={() => {
                                toast.success(`Filtering by ${filter}`);
                                // TODO: Do actual filtering
                                setSelected(filter);
                            }}
                        >
                            <span>{filter}</span>
                        </li>
                    ))}
                </div>

                <div className="ml-auto flex items-center gap-2 p-4 rounded-md border border-slate-100">
                    {/*  Filters icon  */}
                    <div className="flex items-center gap-2">
                        <TbChartCandleFilled size={24} className={"text-primary"}/>
                    </div>

                    {/*  Selected Date  */}
                    <span className="text-base font-semibold text-primary">10 Dec 2021 - 10 Jan 2022</span>
                </div>
            </div>
        </div>
    );
}

export default DateFilters;
