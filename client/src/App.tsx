import { Sidebar } from "./components/Sidebar.tsx";
import Dashboard from "./pages/Dashboard.tsx";
function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
