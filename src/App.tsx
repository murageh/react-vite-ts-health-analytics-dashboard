import './App.css'
import KeyMetrics from "./components/KeyMetrics.tsx";
import IncidentList from "./components/IncidentList.tsx";

function App() {

  return (
      <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-6">Analytics</h1>
          <KeyMetrics/>
          <IncidentList/>
          {/* ... other dashboard components will go here */}
      </div>
  );
}

export default App
