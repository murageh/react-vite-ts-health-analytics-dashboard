import './App.css'
import KeyMetrics from "./components/KeyMetrics.tsx";
import IncidentList from "./components/IncidentList.tsx";
import FootFallChart from "./components/charts/FootFallChart";
import PatientSatisfactionChart from "./components/charts/PatientSatisfactionChart";
import RevenueChart from "./components/charts/RevenueChart";
import StaffTable from "./components/charts/StaffTable.tsx";
import ThemeToggle from "./components/theme/ThemeToggle.tsx";

function App() {

  return (
      <div className="container mx-auto p-8">
          <div className='flex justify-end mb-4'> {/* Position the toggle at the top right */}
              <ThemeToggle/>
          </div>
          <h1 className="text-3xl font-bold mb-6">Analytics</h1>
          <KeyMetrics/>
          <IncidentList/>

          <FootFallChart/>
          <PatientSatisfactionChart/>
          <RevenueChart/>

          <StaffTable/>
      </div>
  );
}

export default App
