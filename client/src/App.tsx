import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";
import HomePage from "./pages/HomePage.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import { LinkPage } from "./pages/Linkpage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/links"
        element={
          <ProtectedRoute>
            <LinkPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
