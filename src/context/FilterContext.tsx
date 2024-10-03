import React, {createContext, useContext, useEffect, useState} from 'react';

type Period = 'day' | 'week' | 'month'; // Define a type for the period

interface FilterState {
    startDate: string | null;
    endDate: string | null;
    period: Period; // Use the Period type
}

const initialFilterState: FilterState = {
    startDate: null,
    endDate: null,
    period: 'month',
};

const FilterContext = createContext<{
    filters: FilterState;
    setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}>({
    filters: initialFilterState,
    setFilters: () => {
    },
});

export const useFilterContext = () => {
    return useContext(FilterContext);
};

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({children}) => { // Add type for children
    const [filters, setFilters] = useState(initialFilterState);

    useEffect(() => {
        const storedFilters = localStorage.getItem('filters');
        if (storedFilters) {
            setFilters(JSON.parse(storedFilters));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('filters', JSON.stringify(filters));
    }, [filters]);


    return (
        <FilterContext.Provider value={{filters, setFilters}}>
            {children}
        </FilterContext.Provider>
    );
};