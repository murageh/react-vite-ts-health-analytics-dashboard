import MainSidebar from './MainSidebar.tsx';
import TopNav from './TopNav.tsx';
import React from "react";
import {FilterProvider} from "../context/FilterContext.tsx";

const DashboardLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <FilterProvider>
            <div className="flex h-screen">
                {/* Main Sidebar with icons */}
                <MainSidebar/>

                {/* Main content area */}
                <div className="flex-1 flex flex-col h-screen overflow-y-auto">
                    {/* Top Navigation */}
                    <TopNav/>

                    {/* Content area */}
                    <div className="flex-1 p-6 bg-gray-100">
                        {children} {/* AnalyticsPage will go here */}
                    </div>
                </div>
            </div>
        </FilterProvider>
    );
};

export default DashboardLayout;
