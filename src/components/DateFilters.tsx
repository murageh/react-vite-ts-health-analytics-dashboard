import {TbChartCandleFilled} from "react-icons/tb";
import {toast} from "react-toastify";
import {Period, useFilterContext} from "../context/FilterContext.tsx";
import moment from "moment";

// has a horizontal list of filters - Day, Week, Month, Year. All these, when selected, have a blue border. Slightly rounded corners.
// On the right after these filters, is a node denoting the selected period e.g., <Filter icon> 10Dec 2021 - 10Jan 2022
const DateFilters = () => {
    const {filters, setFilters} = useFilterContext();

    const handleFilterChange = (period: Period) => {
        // Calculate startDate and endDate based on the selected period
        const today = moment();
        let startDate = today;
        let endDate = today;

        switch (period) {
            case 'day':
                startDate = today.clone().startOf('day');
                endDate = today.clone().endOf('day');
                break;
            case 'week':
                startDate = today.clone().startOf('isoWeek');
                endDate = today.clone().endOf('isoWeek');
                break;
            case 'month':
                startDate = today.clone().startOf('month');
                endDate = today.clone().endOf('month');
                break;
            case 'year':
                startDate = today.clone().startOf('year');
                endDate = today.clone().endOf('year');
                break;
            case '5yrs':
                // 5 years back, for example
                startDate = today.clone().startOf('year').subtract(5, 'years');
                endDate = today.clone().endOf('year');
                break;
            default:
                // Default to day filter if none is selected
                startDate = today.clone().startOf('day');
                endDate = today.clone().endOf('day');
                break;
        }

        // Set filters in context, including the calculated startDate and endDate
        setFilters({
            ...filters,
            period,
            startDate: startDate.toISOString(), // Convert to ISO string for backend compatibility
            endDate: endDate.toISOString()
        });

        toast.success(`Filtering by ${period}`);
    };

    const getDefaultDateRange = (period: Period) => {
        const today = moment();

        switch (period) {
            case 'day':
                return today.format('DD MMM YYYY');
            case 'week': {
                const startOfWeek = today.clone().startOf('isoWeek');
                const endOfWeek = today.clone().endOf('isoWeek');
                return `${startOfWeek.format('DD MMM YYYY')} - ${endOfWeek.format('DD MMM YYYY')}`;
            }
            case 'month': {
                const startOfMonth = today.clone().startOf('month');
                const endOfMonth = today.clone().endOf('month');
                return `${startOfMonth.format('DD MMM YYYY')} - ${endOfMonth.format('DD MMM YYYY')}`;
            }
            case 'year': {
                const startOfYear = today.clone().startOf('year');
                const endOfYear = today.clone().endOf('year');
                return `${startOfYear.format('DD MMM YYYY')} - ${endOfYear.format('DD MMM YYYY')}`;
            }
            case '5yrs':
                return 'Past 5 years';
            default:
                return 'No valid period selected';
        }
    };

    return (
        <div className={`w-full bg-white p-4 rounded-md flex flex-col items-start gap-2 mb-4`}>
            <h2 className={`text-xs text-slate-400 font-bold text-left uppercase`}>
                FILTER INCIDENTS BY DATE
            </h2>

            <div className="w-full flex justify-start flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-2">
                    {['day', 'week', 'month', 'year', '5yrs'].map((filter) => (
                        <li
                            key={filter}
                            className={`text-sm font-normal text-left flex items-center justify-start gap-x-2 px-4 py-4 rounded-md border border-gray-200 ${filters.period === filter ? 'text-primary border-3 border-primary' : 'hover:bg-gray-100'}`}
                            onClick={() => handleFilterChange(filter as Period)}
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

                    {/*  Date range display based on selected filters */}
                    <span className="text-base font-semibold text-primary">
                        {getDefaultDateRange(filters.period)}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default DateFilters;
