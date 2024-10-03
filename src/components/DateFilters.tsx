import React from "react";

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
                            className={`text-sm font-normal text-left flex items-center justify-start gap-x-2 px-4 py-4 rounded-md border border-gray-200 ${selected === filter ? 'text-blue-700 border-blue-700' : 'hover:bg-gray-100'}`}
                            onClick={() => setSelected(filter)}
                        >
                            <span>{filter}</span>
                        </li>
                    ))}
                </div>

                <div className="ml-auto flex items-center gap-2 p-4 rounded-md border border-blue-700">
                    {/*  Filters icon  */}
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-700" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                            <path fillRule="evenodd" d="M3 5a2 2 0 100-4 2 2 0 000 4zM17 5a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"/>
                            <path fillRule="evenodd" d="M10 20a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                            <path fillRule="evenodd" d="M3 13a2 2 0 100-4 2 2 0 000 4zM17 13a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"/>
                        </svg>
                    </div>

                    {/*  Selected Date  */}
                    <span className="text-xs text-gray-500">10 Dec 2021 - 10 Jan 2022</span>
                </div>
            </div>
        </div>
    );
}

export default DateFilters;
