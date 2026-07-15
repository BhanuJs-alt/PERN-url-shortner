import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";
import HomePage from "./pages/HomePage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
