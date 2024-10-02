import MainSidebar from './MainSidebar.tsx';
import TopNav from '../components/TopNav';
import React from "react";

const DashboardLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen">
            {/* Main Sidebar with icons */}
            <MainSidebar/>

            {/* Main content area */}
            <div className="flex-1 flex flex-col">
                {/* Top Navigation */}
                <TopNav/>

                {/* Content area */}
                <div className="flex-1 p-6 bg-gray-100">
                    {children} {/* AnalyticsPage will go here */}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
