import './App.css'
import DashboardLayout from "./layouts/DashboardLayout.tsx";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import AnalyticsPage from "./pages/AnalyticsPage.tsx";

const router = createBrowserRouter(
    // Some dummy routing
    createRoutesFromElements(
        [
            <Route path="/" element={<DashboardLayout>
                <AnalyticsPage/>
            </DashboardLayout>}/>
            ,
            <Route path="test" element={<>Test route</>}/>
        ]
    )
)

function App() {

    return (
        <div className="w-full p-0">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App
